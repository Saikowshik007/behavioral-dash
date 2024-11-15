import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import Papa from 'papaparse';
import { InterviewQA } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const loadCSVData = async (): Promise => {
  const response = await fetch('/data/merged.csv');
  const csv = await response.text();

  return new Promise((resolve) => {
    Papa.parse(csv, {
      header: true,
      complete: (results) => {
        resolve(results.data as InterviewQA[]);
      },
    });
  });
};
