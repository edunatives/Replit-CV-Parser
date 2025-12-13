/**
 * @fileoverview MongoDB Database Connection Module
 * @description Manages MongoDB connection with connection pooling and graceful fallback.
 * Uses singleton pattern for connection caching to avoid multiple connections.
 * Designed to fail gracefully - returns null if connection unavailable.
 * 
 * @requires MONGODB_URI - MongoDB connection string (environment variable)
 * @requires MONGODB_DB - Database name (defaults to 'cv_parser')
 */

import { MongoClient, Db, Collection, Document } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.MONGODB_DB || "cv_parser";

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;
let connectionFailed = false;

/**
 * Establish connection to MongoDB database
 * Uses connection caching to reuse existing connections
 * 
 * @returns {Promise<{client: MongoClient, db: Db} | null>} Connection object or null if unavailable
 * 
 * @example
 * const connection = await connectToDatabase();
 * if (connection) {
 *   const { db } = connection;
 *   const collection = db.collection('cvs');
 * }
 * 
 * @note Returns null instead of throwing if connection fails
 * @note Connection timeout: 2 seconds (prevents blocking on unavailable DB)
 */
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

/**
 * Get a specific collection from the database
 * Convenience wrapper around connectToDatabase for common use case
 * 
 * @param {string} collectionName - Name of the MongoDB collection
 * @returns {Promise<Collection<Document> | null>} Collection reference or null if DB unavailable
 * 
 * @example
 * const cvsCollection = await getCollection('cvs');
 * if (cvsCollection) {
 *   await cvsCollection.insertOne({ id: '123', name: 'John Doe' });
 *   const cvs = await cvsCollection.find({}).toArray();
 * }
 */
export async function getCollection(collectionName: string): Promise<Collection<Document> | null> {
  const connection = await connectToDatabase();
  if (!connection) {
    return null;
  }
  return connection.db.collection(collectionName);
}
