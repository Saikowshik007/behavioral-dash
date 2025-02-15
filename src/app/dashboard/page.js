'use client';

import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { ChevronDown, ChevronUp, Search, LogOut, Trash2, Edit2, Save, X, Plus } from 'lucide-react';
import { collection, doc, getDoc, updateDoc, deleteField, setDoc, serverTimestamp } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { QuestionDistributionChart } from '@/components/ui/QuestionDistributionChart';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { ToastProvider, useToast, AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction, AlertDialogCancel, ToastButton } from '@/components/ui/toast';

const QuestionCardList = ({
  questions,
  expandedCards,
  toggleCard,
  handleDelete,
  isDeleting,
  showDeleteDialog,
  setShowDeleteDialog,
  deleteTarget,
  setDeleteTarget
}) => {
  const [editMode, setEditMode] = useState({});
  const [editValues, setEditValues] = useState({});
  const { toast } = useToast();

  // Color schema from the dashboard
  const COLORS = {
    'Introduction': '#3498db',
    'Conflict Resolution': '#2ecc71',
    'Problem Solving': '#f1c40f',
    'Leadership': '#e74c3c',
    'Stress Management': '#9b59b6',
    'Decision Making': '#1abc9c',
    'Initiative': '#2ecc71',
    'Communication': '#f39c12',
    'Time Management': '#f1c40f',
    'Customer Service': '#e67e22',
    'Adaptability': '#3498db',
    'Achievement': '#16a085',
    'Growth Mindset': '#1abc9c',
    'System Design': '#e74c3c',
    'Risk Management': '#e67e22',
    'Collaboration': '#3498db',
    'Strategy': '#95a5a6',
    'Development': '#f1c40f',
    'Technical Skills': '#bdc3c7',
    'Interview Questions': '#3498db',
    'Career Goals': '#e67e22',
    'Work Style': '#1abc9c',
    'Innovation': '#f39c12',
    'Efficiency': '#e74c3c',
    'Process Improvement': '#9b59b6'
  };


  const handleEditClick = (questionId) => {
    setEditMode(prev => ({
      ...prev,
      [questionId]: true
    }));
    setEditValues(prev => ({
      ...prev,
      [questionId]: { ...questions.find(q => q.id === questionId) }
    }));
  };

  const handleSave = async (questionId) => {
    try {
      const userDocRef = doc(db, 'questions', auth.currentUser.uid);
      const updatedFields = editValues[questionId];
      const { id, ...fieldsToUpdate } = updatedFields;

      await updateDoc(userDocRef, {
        [questionId]: fieldsToUpdate
      });

      setEditMode(prev => ({
        ...prev,
        [questionId]: false
      }));

      toast({
        title: "Changes saved",
        description: "Your changes have been saved successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save changes. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleCancel = (questionId) => {
    setEditMode(prev => ({
      ...prev,
      [questionId]: false
    }));
  };

  const handleFieldChange = (questionId, field, value) => {
    setEditValues(prev => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        [field]: value
      }
    }));
  };

  // Get questions distribution for the pie chart
  const typeCount = questions.reduce((acc, curr) => {
    acc[curr.type] = (acc[curr.type] || 0) + 1;
    return acc;
  }, {});

  const pieData = Object.entries(typeCount)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);

  return (
    <div className="text-black">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Question Type Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <QuestionDistributionChart
            data={pieData}
            colors={COLORS}
          />
        </CardContent>
      </Card>

      <div className="space-y-4">
             {questions.map((question) => (
               <Card key={question.id}>
                 <CardHeader>
                   <div className="flex justify-between items-start">
                     <div className="flex-1">
                       <CardTitle className="text-black">{question.id}</CardTitle>
                       <div className="mt-2 flex items-center justify-between">
                         <span
                           className="px-3 py-1 rounded-full text-sm font-medium text-white"
                           style={{ backgroundColor: COLORS[question.type] || '#999999' }}
                         >
                           {question.type}
                         </span>
                         <div className="flex space-x-2">
                           {expandedCards[question.id] && !editMode[question.id] && (
                             <ToastButton
                               variant="outline"
                               size="sm"
                               onClick={() => handleEditClick(question.id)}
                             >
                               <Edit2 className="h-4 w-4" />
                             </ToastButton>
                           )}
                           <ToastButton
                             variant="outline"
                             size="sm"
                             className="text-red-600 hover:text-red-700"
                             onClick={() => {
                               setDeleteTarget(question.id);
                               setShowDeleteDialog(true);
                             }}
                             disabled={isDeleting[question.id]}
                           >
                             <Trash2 className="h-4 w-4" />
                           </ToastButton>
                         </div>
                       </div>
                     </div>
                   </div>
                 </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <ToastButton
                  variant="ghost"
                  className="w-full flex justify-between items-center py-2 text-black"
                  onClick={() => toggleCard(question.id)}
                >
                  <span>Show Answer</span>
                  <ChevronDown
                    className={`h-4 w-4 transform transition-transform ${
                      expandedCards[question.id] ? 'rotate-180' : ''
                    }`}
                  />
                </ToastButton>

                {expandedCards[question.id] && (
                  <div className="space-y-4">
                    {question.generic ? (
                      <div className="relative">
                        {editMode[question.id] ? (
                          <textarea
                            value={editValues[question.id]?.generic || ''}
                            onChange={(e) => handleFieldChange(question.id, 'generic', e.target.value)}
                            className="w-full p-2 border rounded text-black"
                            rows={4}
                          />
                        ) : (
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-semibold mb-2 text-black">Answer:</h3>
                            <p className="text-black">{question.generic}</p>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {['situation', 'task', 'action', 'result'].map((field) => (
                          <div key={field} className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-semibold mb-2 capitalize text-black">{field}:</h3>
                            {editMode[question.id] ? (
                              <textarea
                                value={editValues[question.id]?.[field] || ''}
                                onChange={(e) => handleFieldChange(question.id, field, e.target.value)}
                                className="w-full p-2 border rounded text-black"
                                rows={3}
                              />
                            ) : (
                              <p className="text-black">{question[field]}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {editMode[question.id] && (
                      <div className="flex space-x-2 mt-4">
                        <ToastButton onClick={() => handleSave(question.id)}>
                          <Save className="h-4 w-4 mr-1" /> Save Changes
                        </ToastButton>
                        <ToastButton variant="outline" onClick={() => handleCancel(question.id)}>
                          <X className="h-4 w-4 mr-1" /> Cancel
                        </ToastButton>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

const DashboardPage = () => {
  const router = useRouter();
  const [questions, setQuestions] = useState([]);
  const [expandedCards, setExpandedCards] = useState({});
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [isDeleting, setIsDeleting] = useState({});
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const { toast } = useToast();

    const refreshQuestions = async () => {
      if (!user) return;
      try {
        const docRef = doc(db, 'questions', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const questionData = Object.entries(docSnap.data()).map(([key, value]) => ({
            id: key,
            ...value
          }));
          setQuestions(questionData);
        } else {
          setQuestions([]);
        }
      } catch (err) {
        console.error('Error fetching questions:', err);
        setError(err.message);
      }
    };


  const handleDelete = async (questionId) => {
    try {
      setIsDeleting(prev => ({ ...prev, [questionId]: true }));
      const userDocRef = doc(db, 'questions', user.uid);

      const updateObj = {
        [questionId]: deleteField()
      };

      await updateDoc(userDocRef, updateObj);
      setQuestions(prev => prev.filter(q => q.id !== questionId));

      toast({
        title: "Question deleted",
        description: "The question has been successfully deleted.",
      });

      setShowDeleteDialog(false);
      setDeleteTarget(null);
    } catch (error) {
      console.error('Error deleting question:', error);
      toast({
        title: "Error",
        description: "Failed to delete question. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsDeleting(prev => ({ ...prev, [questionId]: false }));
    }
  };

  const confirmDelete = async () => {
    if (deleteTarget) {
      await handleDelete(deleteTarget);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(currentUser === null);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      if (!user) return;

      try {
        setLoading(true);
        const docRef = doc(db, 'questions', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const questionData = Object.entries(docSnap.data()).map(([key, value]) => ({
            id: key,
            ...value
          }));
          setQuestions(questionData);
        } else {
          setQuestions([]);
        }
      } catch (err) {
        setError(err.message);
        console.error('Error fetching questions:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [user]);


  const toggleCard = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const typeDistribution = questions.reduce((acc, question) => {
    acc[question.type] = (acc[question.type] || 0) + 1;
    return acc;
  }, {});

  const pieData = Object.entries(typeDistribution).map(([name, value]) => ({
    name,
    value
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const filteredQuestions = questions.filter(question => {
    const matchesType = selectedType === 'all' || question.type === selectedType;
    const matchesSearch = searchQuery === '' ||
      Object.values(question).some(value =>
        typeof value === 'string' &&
        value.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesType && matchesSearch;
  });

  const uniqueTypes = ['all', ...new Set(questions.map(q => q.type))];

const QUESTION_TYPES = [
     'Introduction',
     'Conflict Resolution',
     'Problem Solving',
     'Leadership',
     'Stress Management',
     'Decision Making',
     'Initiative',
     'Communication',
     'Time Management',
     'Customer Service',
     'Adaptability',
     'Achievement',
     'Growth Mindset',
     'System Design',
     'Risk Management',
     'Collaboration',
     'Strategy',
     'Development',
     'Technical Skills',
     'Interview Questions',
     'Career Goals',
     'Work Style',
     'Innovation',
     'Efficiency',
     'Process Improvement'
   ];

const AddQuestionDialog = ({ open, onOpenChange, onSave, questionTypes }) => {
  const [questionType, setQuestionType] = useState('STAR');
  const [formData, setFormData] = useState({
    id: '',
    type: '',
    generic: '',
    situation: '',
    task: '',
    action: '',
    result: ''
  });
  const { toast } = useToast();

  const handleSave = async () => {
    if (!formData.id || !formData.type) {
      toast({
        title: "Error",
        description: "Question ID and type are required.",
        variant: "destructive",
      });
      return;
    }

    try {
      const userDocRef = doc(db, 'questions', auth.currentUser.uid);

      await updateDoc(userDocRef, {
        [formData.id]: {
          type: formData.type,
          ...(questionType === 'STAR'
            ? {
                situation: formData.situation,
                task: formData.task,
                action: formData.action,
                result: formData.result,
              }
            : { generic: formData.generic }
          ),
        }
      });

      toast({
        title: "Success",
        description: "Question added successfully.",
      });

      onOpenChange(false);
      onSave();

      // Reset form
      setFormData({
        id: '',
        type: '',
        generic: '',
        situation: '',
        task: '',
        action: '',
        result: ''
      });
      setQuestionType('STAR');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add question. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add New Question</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="flex space-x-4">
            <select
              value={questionType}
              onChange={(e) => setQuestionType(e.target.value)}
              className="px-3 py-2 border rounded-md"
            >
              <option value="STAR">STAR Format</option>
              <option value="generic">Generic</option>
            </select>

            <input
              type="text"
              placeholder="Question ID"
              value={formData.id}
              onChange={(e) => setFormData(prev => ({ ...prev, id: e.target.value }))}
              className="px-3 py-2 border rounded-md flex-grow"
            />
          </div>

<select
  value={formData.type}
  onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
  className="w-full px-3 py-2 border rounded-md"
>
  <option value="">Select Question Type</option>
  {QUESTION_TYPES.map(type => (
    <option key={type} value={type}>
      {type}
    </option>
  ))}
</select>

          {questionType === 'generic' ? (
            <textarea
              placeholder="Answer"
              value={formData.generic}
              onChange={(e) => setFormData(prev => ({ ...prev, generic: e.target.value }))}
              className="w-full px-3 py-2 border rounded-md h-32"
            />
          ) : (
            <div className="space-y-4">
              {['situation', 'task', 'action', 'result'].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium mb-1 capitalize">
                    {field}
                  </label>
                  <textarea
                    placeholder={`Enter ${field}`}
                    value={formData[field]}
                    onChange={(e) => setFormData(prev => ({ ...prev, [field]: e.target.value }))}
                    className="w-full px-3 py-2 border rounded-md h-24"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <DialogFooter>
          <ToastButton variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </ToastButton>
          <ToastButton onClick={handleSave}>
            Save Question
          </ToastButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-xl text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <ToastProvider>
      <div className="min-h-screen p-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            {/* Left: Title */}
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Questions Dashboard
              </h1>
            </div>

            {/* Center: Search and Filter */}
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 flex-grow justify-center max-w-2xl mx-auto">
              <div className="relative flex-grow max-w-xl">
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-white shadow-sm w-full"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg bg-white shadow-sm"
              >
                {uniqueTypes.map(type => (
                  <option key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <button
                onClick={handleSignOut}
                className="flex items-center space-x-2 px-4 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>

           <div className="flex justify-end">
                      <ToastButton
                        onClick={() => setShowAddDialog(true)}
                        className="flex items-center space-x-2"
                      >
                        <Plus className="h-4 w-4" />
                        <span>Add Question</span>
                      </ToastButton>
                    </div>

                    <AddQuestionDialog
                      open={showAddDialog}
                      onOpenChange={setShowAddDialog}
                      onSave={refreshQuestions}
                      questionTypes={uniqueTypes}
                    />

          {filteredQuestions.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <p className="text-gray-600">No questions found matching your criteria.</p>
            </div>
          ) : (
            <QuestionCardList
              questions={filteredQuestions}
              expandedCards={expandedCards}
              toggleCard={toggleCard}
              handleDelete={handleDelete}
              isDeleting={isDeleting}
              showDeleteDialog={showDeleteDialog}
              setShowDeleteDialog={setShowDeleteDialog}
              deleteTarget={deleteTarget}
              setDeleteTarget={setDeleteTarget}
            />
          )}

          <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the question
                  and remove it from your dashboard.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={() => {
                  setShowDeleteDialog(false);
                  setDeleteTarget(null);
                }}>
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={confirmDelete}
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </ToastProvider>
  );
};

  export default DashboardPage;