import {
  Controller,
  Post,
  Get,
  Delete,
  Query,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
  BadRequestException,
  PayloadTooLargeException,
  Inject,
} from "@nestjs/common";
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import { CvService } from "./cv.service";
import { ParseService } from "./parse.service";
import { memoryStorage } from "multer";

const storage = memoryStorage();

const fileFilter = (
  _req: Express.Request,
  file: Express.Multer.File,
  callback: (error: Error | null, acceptFile: boolean) => void
) => {
  const allowedTypes = [
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "text/plain",
  ];
  if (allowedTypes.includes(file.mimetype)) {
    callback(null, true);
  } else {
    callback(new BadRequestException("Invalid file type. Only PDF, DOCX, and TXT files are allowed."), false);
  }
};

const uploadConfig = {
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 },
};

@Controller("cv")
export class CvController {
  constructor(
    @Inject(CvService) private readonly cvService: CvService,
    @Inject(ParseService) private readonly parseService: ParseService
  ) {}

  @Post("parse")
  @UseInterceptors(FileInterceptor("file", uploadConfig))
  async parseCv(@UploadedFile() file: Express.Multer.File) {
    console.log("[CvController] POST /parse - Request received");
    
    if (!file) {
      console.log("[CvController] ERROR: No file uploaded");
      throw new BadRequestException("No file uploaded");
    }

    console.log("[CvController] File received:", file.originalname, "Size:", file.size, "Type:", file.mimetype);

    if (file.size > 10 * 1024 * 1024) {
      console.log("[CvController] ERROR: File too large");
      throw new PayloadTooLargeException("File too large. Maximum size is 10MB.");
    }

    const fileId = `file-${Date.now()}`;
    console.log("[CvController] Parsing CV with fileId:", fileId);
    
    const { cv, rawText } = await this.parseService.parseCV(
      file.buffer,
      file.originalname,
      fileId
    );

    console.log("[CvController] Parse complete. Name:", cv.name, "Email:", cv.email);

    cv.mimeType = file.mimetype;
    cv.size = file.size;

    await this.cvService.saveCv(cv);
    console.log("[CvController] CV saved successfully");

    return { cv, rawText };
  }

  @Post("parse/batch")
  @UseInterceptors(FilesInterceptor("files", 20, uploadConfig))
  async parseBatch(@UploadedFiles() files: Express.Multer.File[]) {
    if (!files || files.length === 0) {
      throw new BadRequestException("No files uploaded");
    }

    const results = await Promise.all(
      files.map(async (file, index) => {
        try {
          const fileId = `file-${Date.now()}-${index}`;
          const { cv, rawText } = await this.parseService.parseCV(
            file.buffer,
            file.originalname,
            fileId
          );
          cv.mimeType = file.mimetype;
          cv.size = file.size;
          await this.cvService.saveCv(cv);
          return { success: true, cv, rawText, filename: file.originalname };
        } catch (error) {
          return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to parse",
            filename: file.originalname,
          };
        }
      })
    );

    return { results };
  }

  @Get("list")
  async listCvs() {
    const cvs = await this.cvService.getAllCvs();
    return { cvs };
  }

  @Delete()
  async deleteCv(@Query("id") id: string) {
    if (!id) {
      throw new BadRequestException("No ID provided");
    }
    await this.cvService.deleteCv(id);
    return { success: true };
  }
}
