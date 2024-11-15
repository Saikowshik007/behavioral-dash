// app/api/questions/edit/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import Papa from 'papaparse';

export async function PUT(req: NextRequest) {
  try {
    const { originalQuestion, updatedQuestion } = await req.json();
    const csvFilePath = path.join(process.cwd(), 'public', 'data', 'merged.csv');

    // Read existing CSV file
    let csvContent = await fs.readFile(csvFilePath, 'utf-8');
    let records = Papa.parse(csvContent, { header: true }).data;

    // Find and update the question
    records = records.map((record: any) =>
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

// app/api/questions/delete/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import Papa from 'papaparse';

export async function DELETE(req: NextRequest) {
  try {
    const { question } = await req.json();
    const csvFilePath = path.join(process.cwd(), 'public', 'data', 'merged.csv');

    // Read existing CSV file
    let csvContent = await fs.readFile(csvFilePath, 'utf-8');
    let records = Papa.parse(csvContent, { header: true }).data;

    // Filter out the question to delete
    records = records.filter((record: any) => record.Question !== question);

    // Convert back to CSV
    const newCsvContent = Papa.unparse(records);

    // Write back to file
    await fs.writeFile(csvFilePath, newCsvContent);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting question:', error);
    return NextResponse.json(
      { error: 'Failed to delete question' },
      { status: 500 }
    );
  }
}