/**
 * @fileoverview Single CV File Parse API
 * @description Handles parsing of individual CV/resume files (PDF, DOCX, TXT).
 * Uses AI-powered extraction via Gemini 2.5 Flash for intelligent field parsing.
 * Saves parsed CVs to MongoDB for persistence.
 * 
 * @endpoint POST /api/parse
 * @accepts multipart/form-data with 'file' field
 * @returns {Object} { cv: ParsedCV, rawText: string }
 */

import { NextRequest, NextResponse } from "next/server";
import { parseCV } from "@/lib/parse/parseCv";
import { getCollection } from "@/lib/db/mongodb";

export const runtime = "nodejs";

/**
 * Parse a single CV file and extract structured data
 * 
 * @param {NextRequest} request - The incoming request with FormData
 * @returns {Promise<NextResponse>} JSON response with parsed CV data
 * 
 * @example
 * // Request
 * const formData = new FormData();
 * formData.append('file', cvFile);
 * formData.append('fileId', 'optional-custom-id');
 * 
 * // Response
 * {
 *   cv: {
 *     id: "file-123",
 *     name: "John Doe",
 *     title: "Software Engineer",
 *     email: "john@example.com",
 *     // ... other fields
 *   },
 *   rawText: "Raw extracted text from document..."
 * }
 * 
 * @throws {400} No file uploaded
 * @throws {400} Invalid file type (only PDF, DOCX, TXT allowed)
 * @throws {400} File too large (max 3MB)
 * @throws {500} Parse error
 */
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

    if (file.size > 3 * 1024 * 1024) {
      return NextResponse.json(
        { error: "File too large. Maximum size is 3MB." },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const { cv, rawText } = await parseCV(buffer, file.name, fileId);

    cv.mimeType = file.type;
    cv.size = file.size;

    const collection = await getCollection("cvs");
    if (collection) {
      try {
        await collection.insertOne({ ...cv, createdAt: new Date() });
      } catch (dbError) {
        console.log("Failed to save to MongoDB:", dbError);
      }
    }

    const tokenUsage = cv.tokenUsage || { promptTokens: 0, completionTokens: 0, totalTokens: 0 };

    return NextResponse.json({ cv, rawText, tokenUsage });
  } catch (error) {
    console.error("Error parsing CV:", error);
    return NextResponse.json({ error: "Failed to parse CV" }, { status: 500 });
  }
}
