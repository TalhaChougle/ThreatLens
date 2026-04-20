exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { Allow: 'POST', 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  const apiKey = (process.env.GEMINI_API_KEY || process.env.THREATLENS_GEMINI_API_KEY || '').trim();
  if (!apiKey) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Server configuration error: missing GEMINI_API_KEY.' })
    };
  }

  let prompt = '';
  try {
    const parsed = JSON.parse(event.body || '{}');
    prompt = String(parsed.prompt || '').trim();
  } catch {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Invalid JSON body.' })
    };
  }

  if (!prompt) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Missing prompt.' })
    };
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
      return {
        statusCode: geminiRes.status,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          error: data?.error?.message || 'Gemini API request failed.',
          details: data
        })
      };
    }

    const raw = (data?.candidates || [])
      .flatMap(c => ((c?.content?.parts) || []).map(p => p?.text || ''))
      .join('')
      .trim();

    if (!raw) {
      return {
        statusCode: 502,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Gemini returned an empty response.', details: data })
      };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ raw })
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error: err?.message || 'Unexpected server error.',
        details: { name: err?.name || 'Error' }
      })
    };
  }
};
