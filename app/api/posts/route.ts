import { NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/content';

export async function GET() {
  return NextResponse.json(getAllPosts());
}
