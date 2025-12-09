import { NextRequest, NextResponse } from "next/server";
import { getCollection } from "@/lib/db/mongodb";

export async function GET() {
  try {
    const collection = await getCollection("cvs");
    const cvs = await collection.find({}).sort({ createdAt: -1 }).limit(100).toArray();
    return NextResponse.json({ cvs });
  } catch (error) {
    console.error("Error fetching CVs:", error);
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

    const collection = await getCollection("cvs");
    await collection.deleteOne({ id });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting CV:", error);
    return NextResponse.json({ error: "Failed to delete CV" }, { status: 500 });
  }
}
