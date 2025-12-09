import { NextRequest, NextResponse } from "next/server";
import { parseCV } from "@/lib/parse/parseCv";
import { getCollection } from "@/lib/db/mongodb";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const files = formData.getAll("files") as File[];

    if (!files || files.length === 0) {
      return NextResponse.json({ error: "No files uploaded" }, { status: 400 });
    }

    if (files.length > 50) {
      return NextResponse.json(
        { error: "Too many files. Maximum is 50 files per batch." },
        { status: 400 }
      );
    }

    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/plain",
    ];

    const results = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileId = `file-${Date.now()}-${i}`;

      if (!allowedTypes.includes(file.type)) {
        results.push({
          fileName: file.name,
          error: "Invalid file type",
          cv: null,
          rawText: null,
        });
        continue;
      }

      if (file.size > 10 * 1024 * 1024) {
        results.push({
          fileName: file.name,
          error: "File too large",
          cv: null,
          rawText: null,
        });
        continue;
      }

      try {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const { cv, rawText } = await parseCV(buffer, file.name, fileId);

        cv.mimeType = file.type;
        cv.size = file.size;

        try {
          const collection = await getCollection("cvs");
          await collection.insertOne({ ...cv, createdAt: new Date() });
        } catch (dbError) {
          console.log("MongoDB not available, continuing without persistence");
        }

        results.push({ fileName: file.name, cv, rawText, error: null });
      } catch (parseError) {
        console.error("Error parsing file:", file.name, parseError);
        results.push({
          fileName: file.name,
          error: "Failed to parse file",
          cv: null,
          rawText: null,
        });
      }
    }

    return NextResponse.json({ results });
  } catch (error) {
    console.error("Error processing batch:", error);
    return NextResponse.json({ error: "Failed to process batch" }, { status: 500 });
  }
}
