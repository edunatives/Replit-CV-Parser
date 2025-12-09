import { NextRequest, NextResponse } from "next/server";
import { parseCV } from "@/lib/parse/parseCv";
import { getCollection } from "@/lib/db/mongodb";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const fileId = (formData.get("fileId") as string) || `file-${Date.now()}`;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/plain",
    ];

    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Only PDF, DOCX, and TXT files are allowed." },
        { status: 400 }
      );
    }

    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: "File too large. Maximum size is 10MB." },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const { cv, rawText } = await parseCV(buffer, file.name, fileId);

    cv.mimeType = file.type;
    cv.size = file.size;

    try {
      const collection = await getCollection("cvs");
      await collection.insertOne({ ...cv, createdAt: new Date() });
    } catch (dbError) {
      console.log("MongoDB not available, continuing without persistence:", dbError);
    }

    return NextResponse.json({ cv, rawText });
  } catch (error) {
    console.error("Error parsing CV:", error);
    return NextResponse.json({ error: "Failed to parse CV" }, { status: 500 });
  }
}
