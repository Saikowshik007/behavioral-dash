import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, deleteDoc } from 'firebase/firestore';

interface Question {
  id: string;
  Question: string;
  Generic_Answer: string;
  Situation: string;
  Task: string;
  Action: string;
  Result: string;
  Type: string;
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: 'Question ID is required' },
        { status: 400 }
      );
    }

    // Get reference to the specific document
    const questionRef = doc(db, 'questions', id);

    // Delete the document
    await deleteDoc(questionRef);

    return NextResponse.json({
      success: true,
      message: 'Question deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting question:', error);
    return NextResponse.json(
      { error: 'Failed to delete question' },
      { status: 500 }
    );
  }
}