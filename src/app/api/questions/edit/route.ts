// app/api/questions/edit/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import Papa from 'papaparse';
interface InterviewQA {
  Question: string;
  Generic: string;
  Situation: string;
  Task: string;
  Action: string;
  Result: string;
  Type: string;
}

export async function PUT(req: NextRequest) {
  try {
    const { originalQuestion, updatedQuestion } = await req.json();
    const csvFilePath = path.join(process.cwd(), 'data', 'merged.csv');

    // Read existing CSV file
    const csvContent = await fs.readFile(csvFilePath, 'utf-8');
    let records = Papa.parse<InterviewQA>(csvContent, { header: true }).data;

    // Find and update the question
    records = records.map((record: InterviewQA) =>
      record.Question === originalQuestion ? updatedQuestion : record
    );

    // Convert back to CSV
    const newCsvContent = Papa.unparse(records);

    // Write back to file
    await fs.writeFile(csvFilePath, newCsvContent);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating question:', error);
    return NextResponse.json(
      { error: 'Failed to update question' },
      { status: 500 }

    );
  }
}

