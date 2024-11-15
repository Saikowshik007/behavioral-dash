// app/api/questions/add/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import Papa from 'papaparse';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const csvFilePath = path.join(process.cwd(), 'public', 'data', 'merged.csv');


    const csvContent = await fs.readFile(csvFilePath, 'utf-8');
    let records = Papa.parse(csvContent, { header: true }).data;


    records = [...records, data];

    const newCsvContent = Papa.unparse(records);

    // Write back to file
    await fs.writeFile(csvFilePath, newCsvContent);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error adding question:', error);
    return NextResponse.json(
      { error: 'Failed to add question' },
      { status: 500 }
    );
  }
}