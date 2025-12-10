/**
 * @fileoverview CV Collection CRUD API
 * @description Handles retrieval and deletion of stored CVs from MongoDB.
 * Provides endpoints for listing all CVs and deleting individual CVs.
 * 
 * @endpoint GET /api/cvs - List all stored CVs
 * @endpoint DELETE /api/cvs?id={cvId} - Delete a specific CV
 */

import { NextRequest, NextResponse } from "next/server";
import { getCollection } from "@/lib/db/mongodb";

/**
 * Retrieve all stored CVs from the database
 * 
 * @returns {Promise<NextResponse>} JSON response with array of CVs
 * 
 * @example
 * // Response
 * {
 *   cvs: [
 *     { id: "file-123", name: "John Doe", title: "Engineer", createdAt: "2024-01-01T..." },
 *     { id: "file-124", name: "Jane Smith", title: "Designer", createdAt: "2024-01-02T..." }
 *   ]
 * }
 * 
 * @note Returns empty array if database is unavailable (graceful degradation)
 * @note Results are sorted by createdAt descending, limited to 100 entries
 */
export async function GET() {
  try {
    const collection = await getCollection("cvs");
    if (!collection) {
      return NextResponse.json({ cvs: [] });
    }
    const cvs = await collection.find({}).sort({ createdAt: -1 }).limit(100).toArray();
    return NextResponse.json({ cvs });
  } catch (error) {
    console.error("Error fetching CVs:", error);
    return NextResponse.json({ cvs: [] });
  }
}

/**
 * Delete a specific CV from the database
 * 
 * @param {NextRequest} request - Request with 'id' query parameter
 * @returns {Promise<NextResponse>} JSON response indicating success or error
 * 
 * @example
 * // Request: DELETE /api/cvs?id=file-123
 * 
 * // Success Response
 * { success: true }
 * 
 * // Error Response
 * { error: "No ID provided" }
 * 
 * @throws {400} No ID provided in query params
 * @throws {503} Database unavailable
 * @throws {500} Delete operation failed
 */
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "No ID provided" }, { status: 400 });
    }

    const collection = await getCollection("cvs");
    if (!collection) {
      return NextResponse.json({ error: "Database unavailable" }, { status: 503 });
    }
    await collection.deleteOne({ id });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting CV:", error);
    return NextResponse.json({ error: "Failed to delete CV" }, { status: 500 });
  }
}
