import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, updateDoc, serverTimestamp, getDoc } from 'firebase/firestore';

interface QuestionUpdate {
  id: string;
  Question?: string;
  Generic?: string;
  Situation?: string;
  Task?: string;
  Action?: string;
  Result?: string;
  Type?: string;
}

export async function PUT(req: NextRequest) {
  try {
    // Parse and validate request data
    const body = await req.json();
    const { id, ...updatedData }: QuestionUpdate = body;

    // Validate required fields
    if (!id) {
      return NextResponse.json(
        { error: 'Question ID is required' },
        { status: 400 }
      );
    }

    // Get reference to the document
    const questionRef = doc(db, 'data', id);

    // Check if document exists
    const docSnap = await getDoc(questionRef);
    if (!docSnap.exists()) {
      return NextResponse.json(
        { error: 'Question not found' },
        { status: 404 }
      );
    }

    // Remove any undefined values from updatedData
    const cleanedData = Object.entries(updatedData).reduce<QuestionUpdate>((acc, [key, value]) => {
      if (value !== undefined) {
         acc[key as keyof QuestionUpdate] = value;
      }
      return acc;
    }, {});

    // Add timestamp to track updates
    const dataToUpdate = {
      ...cleanedData,
      updatedAt: serverTimestamp()
    };

    // Update the document
    await updateDoc(questionRef, dataToUpdate);

    return NextResponse.json({
      success: true,
      message: 'Question updated successfully',
      updatedFields: Object.keys(cleanedData)
    });

  } catch (error) {
    console.error('Error updating question:', error);

    // Handle specific error types
    if (error instanceof Error) {
      if (error.message.includes('permission-denied')) {
        return NextResponse.json(
          { error: 'Permission denied to update question' },
          { status: 403 }
        );
      }
      if (error.message.includes('not-found')) {
        return NextResponse.json(
          { error: 'Question not found' },
          { status: 404 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Failed to update question' },
      { status: 500 }
    );
  }
}

// Optionally add HEAD method to check document existence
export async function HEAD(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return new NextResponse(null, { status: 400 });
    }

    const docRef = doc(db, 'questions', id);
    const docSnap = await getDoc(docRef);

    return new NextResponse(null, {
      status: docSnap.exists() ? 200 : 404
    });
  } catch (error) {
    console.error('Error checking question existence:', error);
    return new NextResponse(null, { status: 500 });
  }
}