import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, updateDoc, serverTimestamp } from 'firebase/firestore';

interface QuestionUpdate {
  id: string;
  Question?: string;
  Generic_Answer?: string;
  Situation?: string;
  Task?: string;
  Action?: string;
  Result?: string;
  Type?: string;
}

export async function PUT(req: NextRequest) {
  try {
    const { id, ...updatedData }: QuestionUpdate = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: 'Question ID is required' },
        { status: 400 }
      );
    }

    // Get reference to the specific document
    const questionRef = doc(db, 'questions', id);

    // Add timestamp to track updates
    const dataToUpdate = {
      ...updatedData,
      updatedAt: serverTimestamp()
    };

    // Update the document
    await updateDoc(questionRef, dataToUpdate);

    return NextResponse.json({ 
      success: true,
      message: 'Question updated successfully'
    });
  } catch (error) {
    console.error('Error updating question:', error);
    return NextResponse.json(
      { error: 'Failed to update question' },
      { status: 500 }
    );
  }
}