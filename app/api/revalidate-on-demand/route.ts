// app/api/revalidate-on-demand/route.ts

import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET() {
  revalidatePath('/lessons/4');
  return NextResponse.json({ revalidated: true });
}
