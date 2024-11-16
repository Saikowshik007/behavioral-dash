'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Edit, Trash2, Plus, ChevronDown } from 'lucide-react';
import { PieChart, Pie, Cell } from 'recharts';
import { Button } from "@/components/ui/button";
import Papa from 'papaparse';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

interface InterviewQA {
  Question: string;
  Generic: string;
  Situation: string;
  Task: string;
  Action: string;
  Result: string;
  Type: string;
}
interface CustomError {
  message: string;
  statusCode?: number;
  details?: string;
}

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

const InterviewDashboard = () => {
  const [data, setData] = useState<InterviewQA[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
   const [deleteQuestion, setDeleteQuestion] = useState<InterviewQA | null>(null);
   const [expandedQuestions, setExpandedQuestions] = useState<Set<number>>(new Set());
    const { toast } = useToast();
    const router = useRouter();

    const toggleQuestion = (index: number) => {
      setExpandedQuestions(prev => {
        const newSet = new Set(prev);
        if (newSet.has(index)) {
          newSet.delete(index);
        } else {
          newSet.add(index);
        }
        return newSet;
      });
    };

const handleEdit = (question: InterviewQA) => {
  const encodedData = encodeURIComponent(JSON.stringify(question));
  router.push(`/edit-question?data=${encodedData}`);
};

    const handleDelete = async (question: InterviewQA) => {
      try {
        const response = await fetch('/api/questions/delete', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ question: question.Question }),
        });

        if (!response.ok) {
          throw new Error('Failed to delete question');
        }

        toast({
          title: 'Success',
          description: 'Question deleted successfully',
        });

        // Refresh the data
        router.refresh();
      } catch (error) {
          console.error('Error deleting question:', error);
        toast({
          title: 'Error',
          description: 'Failed to delete question',
          variant: 'destructive',
        });
      }
    };

  useEffect(() => {
    const loadData = async () => {
      try {
            const basePath = process.env.NODE_ENV === 'production'
            ? '/behavioral-dash'
            : '';
        const url = `${basePath}/data/merged.csv`;
        console.log('Attempting to fetch CSV from:', url);
        const response = await fetch(`${basePath}/data/merged.csv`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const csvText = await response.text();

        Papa.parse<InterviewQA>(csvText, {
          header: true,
          skipEmptyLines: true,
          transformHeader: (header) => header.trim(),
          transform: (value) => value.trim(),
          complete: (results) => {
            const parsedData = results.data.filter(item =>
              item.Question &&
              typeof item.Question === 'string' &&
              item.Type &&
              typeof item.Type === 'string'
            );

            if (parsedData.length === 0) {
              setError('No valid data found in CSV file');
              setLoading(false);
              return;
            }

            setData(parsedData);
            setLoading(false);
          },
          error: (error: CustomError) => {
            setError(`Error parsing CSV: ${error.message}`);
            setLoading(false);
          }
        });
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        setError(`Error loading CSV: ${errorMessage}`);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Get all unique tags from the data
  const allTags = [...new Set(data.map(item => item.Type).filter(Boolean))];

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Count questions by type
  const typeCount = data.reduce((acc: Record<string, number>, curr) => {
    if (curr.Type) {
      acc[curr.Type] = (acc[curr.Type] || 0) + 1;
    }
    return acc;
  }, {});

  // Sort data for pie chart
  const sortedPieData = Object.entries(typeCount)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);

  // Tag colors mapping
  const tagColors = Object.fromEntries(
    allTags.map(tag => [tag, COLORS[tag as keyof typeof COLORS] || '#999999'])
  );

  // Filter data based on search and selected tags
  const filteredData = data.filter(item => {
    const matchesSearch =
      (item.Question?.toLowerCase().includes(searchTerm.toLowerCase()) || false) ||
      (item.Generic?.toLowerCase().includes(searchTerm.toLowerCase()) || false);
    const matchesTags = selectedTags.length === 0 || selectedTags.includes(item.Type);
    return matchesSearch && matchesTags;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg">Loading data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );
  }

return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        {/* Header with Add Button */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Interview Q&A Dashboard</h1>
          <Button
            onClick={() => router.push('/add-question')}
            className="bg-green-600 hover:bg-green-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Question
          </Button>
        </div>

        {/* Search and Tags Section */}
        <div className="space-y-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions or answers..."
              className="pl-10 pr-4 py-2 w-full border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Tags Navigation */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTags([])}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors
                ${selectedTags.length === 0
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors`}
                style={{
                  backgroundColor: selectedTags.includes(tag)
                    ? tagColors[tag]
                    : '#e5e7eb',
                  color: selectedTags.includes(tag)
                    ? 'white'
                    : '#374151'
                }}
              >
                {tag} ({typeCount[tag]})
              </button>
            ))}
          </div>
        </div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Total Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{data.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Question Types</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{Object.keys(typeCount).length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Filtered Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{filteredData.length}</p>
            </CardContent>
          </Card>
        </div>

        {/* Distribution Chart */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Question Type Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <div className="w-full max-w-3xl">
                <PieChart width={800} height={400}>
                  <Pie
                    data={sortedPieData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={160}
                    fill="#8884d8"
                    dataKey="value"
                    label={({
                      cx,
                      cy,
                      midAngle,
                      outerRadius,
                      value,
                      name
                    }) => {
                      const RADIAN = Math.PI / 180;
                      const radius = outerRadius + 20;
                      const x = cx + radius * Math.cos(-midAngle * RADIAN);
                      const y = cy + radius * Math.sin(-midAngle * RADIAN);

                      return (
                        <text
                          x={x}
                          y={y}
                          textAnchor={x > cx ? 'start' : 'end'}
                          dominantBaseline="central"
                          className="text-xs"
                          fill="#666"
                        >
                          {`${name} (${value})`}
                        </text>
                      );
                    }}
                  >
                    {sortedPieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[entry.name as keyof typeof COLORS] || '#999999'}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </div>

              {/* Legend */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4">
                {sortedPieData.map((entry, index) => (
                  <div key={`legend-${index}`} className="flex items-center">
                    <div
                      className="w-3 h-3 rounded-full mr-2"
                      style={{
                        backgroundColor: COLORS[entry.name as keyof typeof COLORS] || '#999999'
                      }}
                    />
                    <span className="text-sm">
                      {entry.name} ({entry.value})
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Question List */}
   {/* Question List */}
  <div className="space-y-4">
    {filteredData.map((item, index) => {
      // Check if STAR fields are empty
      const hasStarContent = item.Situation || item.Task || item.Action || item.Result;

      return (
        <Card key={index}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <CardTitle>{item.Question}</CardTitle>
                <div className="mt-2 flex items-center justify-between">
                  <span
                    className="px-3 py-1 rounded-full text-sm font-medium text-white"
                    style={{ backgroundColor: tagColors[item.Type] }}
                  >
                    {item.Type}
                  </span>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(item)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-red-600 hover:text-red-700"
                      onClick={() => setDeleteQuestion(item)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Toggle Button */}
              <Button
                variant="ghost"
                className="w-full flex justify-between items-center py-2"
                onClick={() => toggleQuestion(index)}
              >
                <span>Show Answer</span>
                <ChevronDown
                  className={`h-4 w-4 transform transition-transform ${
                    expandedQuestions.has(index) ? 'rotate-180' : ''
                  }`}
                />
              </Button>

              {/* Collapsible Content */}
              {expandedQuestions.has(index) && (
                <div className="space-y-4">
                  {!hasStarContent && item.Generic && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Answer:</h3>
                      <p className="text-gray-700">{item.Generic}</p>
                    </div>
                  )}

                  {hasStarContent && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {item.Situation && (
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h3 className="font-semibold mb-2">Situation:</h3>
                          <p className="text-gray-700">{item.Situation}</p>
                        </div>
                      )}
                      {item.Task && (
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h3 className="font-semibold mb-2">Task:</h3>
                          <p className="text-gray-700">{item.Task}</p>
                        </div>
                      )}
                      {item.Action && (
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h3 className="font-semibold mb-2">Action:</h3>
                          <p className="text-gray-700">{item.Action}</p>
                        </div>
                      )}
                      {item.Result && (
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h3 className="font-semibold mb-2">Result:</h3>
                          <p className="text-gray-700">{item.Result}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      );
    })}
  </div>

        {/* Delete Confirmation Dialog */}
        <AlertDialog
          open={!!deleteQuestion}
          onOpenChange={() => setDeleteQuestion(null)}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the question.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className="bg-red-600 hover:bg-red-700"
                onClick={() => {
                  if (deleteQuestion) {
                    handleDelete(deleteQuestion);
                    setDeleteQuestion(null);
                  }
                }}
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default InterviewDashboard;