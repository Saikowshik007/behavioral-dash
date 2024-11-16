// app/api/questions/add/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Add timestamp to the data
    const questionData = {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };

    // Get reference to the questions collection
    const questionsRef = collection(db, 'questions');

    // Add the document to Firestore
    const docRef = await addDoc(questionsRef, questionData);

    return NextResponse.json({
      success: true,
      id: docRef.id
    });
  } catch (error) {
    console.error('Error adding question:', error);
    return NextResponse.json(
      { error: 'Failed to add question' },
      { status: 500 }
    );
  }
}