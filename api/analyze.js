export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const apiKey = (process.env.GEMINI_API_KEY || process.env.THREATLENS_GEMINI_API_KEY || '').trim();
  if (!apiKey) {
    return res.status(500).json({ error: 'Server configuration error: missing GEMINI_API_KEY.' });
  }

  const prompt = String(req.body?.prompt || '').trim();
  if (!prompt) {
    return res.status(400).json({ error: 'Missing prompt.' });
  }

  try {
    const geminiRes = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite-preview:generateContent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.1 }
        })
      }
    );

    const data = await geminiRes.json();
    if (!geminiRes.ok) {
      return res.status(geminiRes.status).json({
        error: data?.error?.message || 'Gemini API request failed.',
        details: data
      });
    }

    const raw = (data?.candidates || [])
      .flatMap(c => ((c?.content?.parts) || []).map(p => p?.text || ''))
      .join('')
      .trim();

    if (!raw) {
      return res.status(502).json({ error: 'Gemini returned an empty response.', details: data });
    }

    return res.status(200).json({ raw });
  } catch (err) {
    return res.status(500).json({
      error: err?.message || 'Unexpected server error.',
      details: { name: err?.name || 'Error' }
    });
  }
}
