import { NextResponse } from 'next/server';
import { getAllTags } from '@/lib/content';

export async function GET() {
  return NextResponse.json(getAllTags());
}
