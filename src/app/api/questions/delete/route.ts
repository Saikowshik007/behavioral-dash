import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, deleteDoc, getDoc } from 'firebase/firestore';

export async function DELETE(req: NextRequest) {
  console.log('Delete question API route hit');

  try {
    const data = await req.json();
    console.log('Received delete request for:', data);

    const { id } = data;

    if (!id) {
      console.log('Missing ID in delete request');
      return NextResponse.json(
        { error: 'Question ID is required' },
        { status: 400 }
      );
    }

    const questionRef = doc(db, 'data', id);
    const questionSnap = await getDoc(questionRef);

    if (!questionSnap.exists()) {
      console.log('Document not found:', id);
      return NextResponse.json(
        { error: 'Question not found' },
        { status: 404 }
      );
    }

    // Delete the document
    await deleteDoc(questionRef);
    console.log('Document successfully deleted:', id);

    return NextResponse.json({
      success: true,
      message: 'Question deleted successfully',
      deletedId: id
    });

  } catch (error) {
    console.error('Error in delete operation:', error);

    // Handle specific error types
    if (error instanceof Error) {
      if (error.message.includes('permission-denied')) {
        return NextResponse.json(
          { error: 'Permission denied to delete question' },
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
      { error: 'Failed to delete question' },
      { status: 500 }
    );
  }
}

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