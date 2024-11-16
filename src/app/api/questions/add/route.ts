import { NextRequest, NextResponse } from 'next/server';
import {questionsCollection } from '@/lib/firebase';
import { addDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(req: NextRequest) {
  console.log('Add question API route hit');
  
  try {
    const data = await req.json();

    if (!data.Question || !data.Type || !data.Generic) {
      console.log('Missing required fields:', {
        hasQuestion: !!data.Question,
        hasType: !!data.Type,
        hasGeneric: !!data.Generic
      });
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const questionData = {
      Question: data.Question,
      Type: data.Type,
      Generic: data.Generic,
      Situation: data.Situation || '',
      Task: data.Task || '',
      Action: data.Action || '',
      Result: data.Result || '',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };

    console.log('Formatted data for Firestore:', questionData);

    // Add the document to Firestore using the questionsCollection reference
    const docRef = await addDoc(questionsCollection, questionData);
    console.log('Document added successfully with ID:', docRef.id);

    return NextResponse.json({
      success: true,
      id: docRef.id,
      message: 'Question added successfully'
    });

  } catch (error) {
    console.error('Request error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}