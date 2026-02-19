import { NextResponse } from 'next/server';

export async function POST(request) {
  const { url } = await request.json();

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 });
  }

  try {
    const downloadUrl = `https://api.tikwm.com/?url=${encodeURIComponent(url)}`;
    
    return NextResponse.json({ downloadUrl });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch video' }, { status: 500 });
  }
}
