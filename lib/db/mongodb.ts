import { MongoClient, Db, Collection, Document } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.MONGODB_DB || "cv_parser";

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;
let connectionFailed = false;

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db } | null> {
  if (connectionFailed || !MONGODB_URI) {
    return null;
  }

  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  try {
    const client = new MongoClient(MONGODB_URI, {
      serverSelectionTimeoutMS: 2000,
      connectTimeoutMS: 2000,
    });
    await client.connect();
    const db = client.db(DB_NAME);

    cachedClient = client;
    cachedDb = db;

    return { client, db };
  } catch (error) {
    console.log("MongoDB connection failed, continuing without persistence");
    connectionFailed = true;
    return null;
  }
}

export async function getCollection(collectionName: string): Promise<Collection<Document> | null> {
  const connection = await connectToDatabase();
  if (!connection) {
    return null;
  }
  return connection.db.collection(collectionName);
}
