import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const NESTJS_API_URL = process.env.NESTJS_API_URL || "http://localhost:3001";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const files = formData.getAll("files") as File[];
    
    if (!files || files.length === 0) {
      return NextResponse.json({ error: "No files uploaded" }, { status: 400 });
    }
    
    const newFormData = new FormData();
    
    for (const file of files) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const blob = new Blob([buffer], { type: file.type });
      newFormData.append("files", blob, file.name);
    }
    
    const response = await fetch(`${NESTJS_API_URL}/api/cv/parse/batch`, {
      method: "POST",
      body: newFormData,
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      return NextResponse.json(
        { error: data.message || data.error || "Failed to parse CVs" },
        { status: response.status }
      );
    }
    
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error proxying batch parse to NestJS:", error);
    return NextResponse.json(
      { error: "Failed to connect to parsing service" },
      { status: 500 }
    );
  }
}
