import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const NESTJS_API_URL = process.env.NESTJS_API_URL || "http://localhost:3001";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const fileId = formData.get("fileId") as string | null;
    
    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }
    
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    const blob = new Blob([buffer], { type: file.type });
    const newFormData = new FormData();
    newFormData.append("file", blob, file.name);
    if (fileId) {
      newFormData.append("fileId", fileId);
    }
    
    const response = await fetch(`${NESTJS_API_URL}/api/cv/parse`, {
      method: "POST",
      body: newFormData,
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      return NextResponse.json(
        { error: data.message || data.error || "Failed to parse CV" },
        { status: response.status }
      );
    }
    
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error proxying to NestJS:", error);
    return NextResponse.json(
      { error: "Failed to connect to parsing service" },
      { status: 500 }
    );
  }
}
