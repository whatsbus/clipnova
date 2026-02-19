import { NextResponse } from 'next/server';

export async function POST(request) {
  const { url } = await request.json();

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 });
  }

  // هنا كتحط الـ API اللي كيخرج الفيديو. مثال بسيط:
  try {
    // هاد الرابط مثال فقط، خاصك تعوضو بـ API حقيقي بحال (Tikwm أو غيره)
    const downloadUrl = `https://api.tikwm.com{encodeURIComponent(url)}`;
    
    return NextResponse.json({ downloadUrl });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch video' }, { status: 500 });
  }
}
