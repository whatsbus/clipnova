export async function POST(req) {
  try {
    const { url } = await req.json();

    if (!url) {
      return Response.json({ error: "No URL" }, { status: 400 });
    }

    const response = await fetch(
      `https://api.tiklydown.eu.org?url=${encodeURIComponent(url)}`
    );

    const data = await response.json();

    if (data.result) {
      return Response.json({
        success: true,
        video:
          data.result.video.no_watermark ||
          data.result.video.url,
      });
    }

    return Response.json({ error: "Failed" }, { status: 500 });

  } catch (err) {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
