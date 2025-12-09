import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import multer from "multer";
import { parseCV } from "./cvParser";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/plain",
    ];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only PDF, DOCX, and TXT files are allowed."));
    }
  },
});

function handleMulterError(err: any, req: any, res: any, next: any) {
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({ error: "File too large. Maximum size is 10MB." });
    }
    return res.status(400).json({ error: err.message });
  } else if (err) {
    return res.status(400).json({ error: err.message });
  }
  next();
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/parse-cv", upload.single("file"), handleMulterError, async (req: Request, res: Response) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      const fileId = req.body.fileId || `file-${Date.now()}`;
      const { cv, rawText } = await parseCV(req.file.buffer, req.file.originalname, fileId);

      res.json({ cv, rawText });
    } catch (error) {
      console.error("Error parsing CV:", error);
      res.status(500).json({ error: "Failed to parse CV" });
    }
  });

  app.post("/api/parse-cvs", upload.array("files", 50), handleMulterError, async (req: Request, res: Response) => {
    try {
      const files = req.files as Express.Multer.File[];
      if (!files || files.length === 0) {
        return res.status(400).json({ error: "No files uploaded" });
      }

      const results = await Promise.all(
        files.map(async (file, index) => {
          const fileId = `file-${Date.now()}-${index}`;
          const { cv, rawText } = await parseCV(file.buffer, file.originalname, fileId);
          return { cv, rawText, fileName: file.originalname };
        })
      );

      res.json({ results });
    } catch (error) {
      console.error("Error parsing CVs:", error);
      res.status(500).json({ error: "Failed to parse CVs" });
    }
  });

  return httpServer;
}
