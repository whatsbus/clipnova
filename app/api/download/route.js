export async function POST(req) {
  try {
    const { url } = await req.json();

    if (!url) {
      return Response.json({ error: "No URL" }, { status: 400 });
    }

    const response = await fetch(
      `https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`
    );

    const data = await response.json();

    if (data && data.data && data.data.play) {
      return Response.json({
        success: true,
        video: data.data.play,
      });
    }

    return Response.json({ error: "Video not found" }, { status: 500 });

  } catch (err) {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
