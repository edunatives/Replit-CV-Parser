import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import { MongoClient, Db, Collection, Document } from "mongodb";

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  private client: MongoClient | null = null;
  private db: Db | null = null;
  private connectionFailed = false;

  async onModuleInit() {
    await this.connect();
  }

  async onModuleDestroy() {
    if (this.client) {
      await this.client.close();
    }
  }

  private async connect(): Promise<void> {
    const uri = process.env.MONGODB_URI;
    const dbName = process.env.MONGODB_DB || "cv_parser";

    if (!uri) {
      console.log("MONGODB_URI not set, running without persistence");
      return;
    }

    try {
      this.client = new MongoClient(uri, {
        serverSelectionTimeoutMS: 2000,
        connectTimeoutMS: 2000,
      });
      await this.client.connect();
      this.db = this.client.db(dbName);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.log("MongoDB connection failed, continuing without persistence");
      this.connectionFailed = true;
    }
  }

  getCollection(name: string): Collection<Document> | null {
    if (this.connectionFailed || !this.db) {
      return null;
    }
    return this.db.collection(name);
  }

  isConnected(): boolean {
    return this.db !== null && !this.connectionFailed;
  }
}
