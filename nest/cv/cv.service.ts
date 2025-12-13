import { Injectable, Inject } from "@nestjs/common";
import { DatabaseService } from "../database/database.service";
import type { ParsedCV } from "../../types/cv";

@Injectable()
export class CvService {
  constructor(@Inject(DatabaseService) private readonly databaseService: DatabaseService) {}

  async saveCv(cv: ParsedCV): Promise<void> {
    const collection = this.databaseService.getCollection("cvs");
    if (collection) {
      try {
        await collection.insertOne({ ...cv, createdAt: new Date() });
      } catch (error) {
        console.log("Failed to save to MongoDB:", error);
      }
    }
  }

  async getAllCvs(): Promise<ParsedCV[]> {
    const collection = this.databaseService.getCollection("cvs");
    if (!collection) {
      return [];
    }
    try {
      const cvs = await collection
        .find({})
        .sort({ createdAt: -1 })
        .limit(100)
        .toArray();
      return cvs as unknown as ParsedCV[];
    } catch (error) {
      console.error("Error fetching CVs:", error);
      return [];
    }
  }

  async deleteCv(id: string): Promise<void> {
    const collection = this.databaseService.getCollection("cvs");
    if (collection) {
      await collection.deleteOne({ id });
    }
  }
}
