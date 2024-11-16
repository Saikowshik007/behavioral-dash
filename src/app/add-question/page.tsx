'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2 } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';

interface QuestionFormData {
  Question: string;
  Type: string;
  Generic_Answer: string;
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


const AddQuestionPage = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [addedQuestionId, setAddedQuestionId] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<QuestionFormData>({
    defaultValues: {
      Question: '',
      Type: '',
      Generic_Answer: '',
      Situation: '',
      Task: '',
      Action: '',
      Result: '',
    },
  });

  const onSubmit = async (data: QuestionFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/questions/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to add question');
      }

      // Show success state
      setAddedQuestionId(result.id);
      setShowSuccess(true);

      toast({
        title: 'Success',
        description: 'Question has been added successfully!',
      });

      // Reset form
      form.reset();

      // Auto-redirect after 2 seconds
      setTimeout(() => {
        router.push('/');
        router.refresh();
      }, 2000);

    } catch (error) {
      console.error('Error adding question:', error);
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to add question',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <Alert className="bg-green-50 border-green-200">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-800">Question Added Successfully!</AlertTitle>
          <AlertDescription className="text-green-700">
            Your question has been added with ID: {addedQuestionId}
            <br />
            Redirecting to dashboard...
          </AlertDescription>
        </Alert>
      </div>
    );
  }


  return (
 <div className="p-6 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Add New Interview Question</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Question Field */}
              <FormField
                control={form.control}
                name="Question"
                rules={{ required: 'Question is required' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Question</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter the interview question..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Question Type Field */}
              <FormField
                control={form.control}
                name="Type"
                rules={{ required: 'Question type is required' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Question Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a question type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {questionTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Generic Answer Field */}
              <FormField
                control={form.control}
                name="Generic_Answer"
                rules={{ required: 'Generic answer is required' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Generic Answer</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter a generic answer..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* STAR Method Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="Situation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Situation (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe the situation..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Task"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Task (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe the task..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Action"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Action (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe the action taken..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Result"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Result (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe the result..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
                              <Button
                                type="button"
                                variant="outline"
                                onClick={() => form.reset()}
                                disabled={isSubmitting}
                              >
                                Reset
                              </Button>
                              <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-green-600 hover:bg-green-700"
                              >
                                {isSubmitting ? 'Adding...' : 'Add Question'}
                              </Button>
                            </div>
                          </form>
                        </Form>
                      </CardContent>
                    </Card>
                  </div>
                );
              };

export default AddQuestionPage;