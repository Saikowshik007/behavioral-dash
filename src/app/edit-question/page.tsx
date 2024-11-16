// app/edit-question/page.tsx
'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface QuestionFormData {
  Question: string;
  Type: string;
  Generic: string;
  Situation: string;
  Task: string;
  Action: string;
  Result: string;
}

const questionTypes = [
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

function EditQuestionForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<QuestionFormData>({
    id: '',
    Question: '',
    Type: '',
    Generic_Answer: '',
    Situation: '',
    Task: '',
    Action: '',
    Result: ''
  });

  useEffect(() => {
    const questionData = searchParams.get('data');
    if (questionData) {
      try {
        const parsedData = JSON.parse(decodeURIComponent(questionData));
        // Ensure we have an ID
        if (!parsedData.id) {
          throw new Error('Question ID is missing');
        }
        setFormData(parsedData);
      } catch (error) {
        console.error('Error parsing question data:', error);
        toast({
          title: 'Error',
          description: 'Failed to load question data',
          variant: 'destructive',
        });
        router.push('/');
      }
    } else {
      router.push('/');
    }
  }, [searchParams, router, toast]);

  const handleInputChange = (field: keyof QuestionFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // First, verify we have an ID
      if (!formData.id) {
        throw new Error('Question ID is required');
      }

      const response = await fetch('/api/questions/edit', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: formData.id,
          Question: formData.Question,
          Type: formData.Type,
          Generic_Answer: formData.Generic_Answer,
          Situation: formData.Situation,
          Task: formData.Task,
          Action: formData.Action,
          Result: formData.Result,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update question');
      }

      toast({
        title: 'Success',
        description: 'Question updated successfully!',
      });

      router.push('/');
      router.refresh();
    } catch (error) {
      console.error('Error updating question:', error);
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to update question. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Edit Interview Question</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Question <span className="text-red-500">*</span>
              </label>
              <Textarea
                placeholder="Enter the interview question..."
                className="min-h-[100px]"
                value={formData.Question}
                onChange={(e) => handleInputChange('Question', e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                Question Type <span className="text-red-500">*</span>
              </label>
              <Select
                value={formData.Type}
                onValueChange={(value) => handleInputChange('Type', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a question type" />
                </SelectTrigger>
                <SelectContent>
                  {questionTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                Generic
              </label>
              <Textarea
                placeholder="Enter a generic answer..."
                className="min-h-[100px]"
                value={formData.Generic}
                onChange={(e) => handleInputChange('Generic', e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Situation (Optional)</label>
                <Textarea
                  placeholder="Describe the situation..."
                  className="min-h-[100px]"
                  value={formData.Situation}
                  onChange={(e) => handleInputChange('Situation', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Task (Optional)</label>
                <Textarea
                  placeholder="Describe the task..."
                  className="min-h-[100px]"
                  value={formData.Task}
                  onChange={(e) => handleInputChange('Task', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Action (Optional)</label>
                <Textarea
                  placeholder="Describe the action taken..."
                  className="min-h-[100px]"
                  value={formData.Action}
                  onChange={(e) => handleInputChange('Action', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Result (Optional)</label>
                <Textarea
                  placeholder="Describe the result..."
                  className="min-h-[100px]"
                  value={formData.Result}
                  onChange={(e) => handleInputChange('Result', e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push('/')}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Updating...' : 'Update Question'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Loading...</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default function EditQuestionPage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <EditQuestionForm />
    </Suspense>
  );
}