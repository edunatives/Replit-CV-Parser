import { NextRequest, NextResponse } from 'next/server';

// Force Node.js runtime - Edge runtime fails with large file uploads
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    // Get the raw body as array buffer for proper streaming
    const contentType = request.headers.get('content-type') || '';
    
    // Read the request body
    const body = await request.arrayBuffer();
    
    // Forward to NestJS with the same content-type and body
    const response = await fetch('http://localhost:3001/api/cv/parse', {
      method: 'POST',
      headers: {
        'content-type': contentType,
      },
      body: Buffer.from(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('NestJS error:', errorText);
      return NextResponse.json(
        { error: errorText || 'Failed to parse CV' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('CV parse proxy error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}
