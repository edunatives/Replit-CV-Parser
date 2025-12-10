import { NextRequest, NextResponse } from "next/server";

const NESTJS_API_URL = process.env.NESTJS_API_URL || "http://localhost:3001";

export async function GET() {
  try {
    const response = await fetch(`${NESTJS_API_URL}/api/cv/list`);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching CVs from NestJS:", error);
    return NextResponse.json({ cvs: [] });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "No ID provided" }, { status: 400 });
    }

    const response = await fetch(`${NESTJS_API_URL}/api/cv?id=${id}`, {
      method: "DELETE",
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      return NextResponse.json(
        { error: data.message || data.error || "Failed to delete CV" },
        { status: response.status }
      );
    }
    
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error deleting CV via NestJS:", error);
    return NextResponse.json({ error: "Failed to delete CV" }, { status: 500 });
  }
}
