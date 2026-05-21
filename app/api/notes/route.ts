import { NextResponse } from 'next/server';
import { getAllNotes } from '@/lib/content';

export async function GET() {
  return NextResponse.json(getAllNotes());
}
