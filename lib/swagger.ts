/**
 * @fileoverview OpenAPI/Swagger Specification for CV Intelligence Parser API
 * @description Defines the complete API specification for all endpoints.
 */

export const swaggerSpec = {
  openapi: "3.0.0",
  info: {
    title: "CV Intelligence Parser API",
    version: "1.0.0",
    description: "AI-powered CV parsing and analysis API. Parse resumes, get AI assessments, career advice, and job description matching.",
    contact: {
      name: "EduNatives",
      url: "https://edunatives.com"
    }
  },
  servers: [
    {
      url: "/api",
      description: "API Server"
    }
  ],
  tags: [
    { name: "Parsing", description: "CV file parsing endpoints" },
    { name: "CVs", description: "CV management endpoints" },
    { name: "AI Analysis", description: "AI-powered analysis endpoints" }
  ],
  paths: {
    "/parse": {
      post: {
        tags: ["Parsing"],
        summary: "Parse a single CV file",
        description: "Upload and parse a CV file (PDF, DOCX, TXT). Extracts structured data using AI-powered extraction.",
        requestBody: {
          required: true,
          content: {
            "multipart/form-data": {
              schema: {
                type: "object",
                properties: {
                  file: {
                    type: "string",
                    format: "binary",
                    description: "CV file to parse (PDF, DOCX, or TXT)"
                  },
                  fileId: {
                    type: "string",
                    description: "Optional custom ID for the CV"
                  }
                },
                required: ["file"]
              }
            }
          }
        },
        responses: {
          200: {
            description: "Successfully parsed CV",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/ParseResponse" }
              }
            }
          },
          400: {
            description: "Invalid request (no file, invalid type, or file too large)",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Error" }
              }
            }
          },
          500: {
            description: "Server error during parsing",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Error" }
              }
            }
          }
        }
      }
    },
    "/parse/batch": {
      post: {
        tags: ["Parsing"],
        summary: "Parse multiple CV files",
        description: "Upload and parse up to 50 CV files in a single request. Each file is processed independently.",
        requestBody: {
          required: true,
          content: {
            "multipart/form-data": {
              schema: {
                type: "object",
                properties: {
                  files: {
                    type: "array",
                    items: {
                      type: "string",
                      format: "binary"
                    },
                    description: "Array of CV files to parse"
                  }
                },
                required: ["files"]
              }
            }
          }
        },
        responses: {
          200: {
            description: "Batch processing results",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/BatchParseResponse" }
              }
            }
          },
          400: {
            description: "No files or too many files (max 50)",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Error" }
              }
            }
          }
        }
      }
    },
    "/cvs": {
      get: {
        tags: ["CVs"],
        summary: "List all stored CVs",
        description: "Retrieve all CVs from the database, sorted by creation date (newest first). Limited to 100 results.",
        responses: {
          200: {
            description: "List of CVs",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    cvs: {
                      type: "array",
                      items: { $ref: "#/components/schemas/ParsedCV" }
                    }
                  }
                }
              }
            }
          }
        }
      },
      delete: {
        tags: ["CVs"],
        summary: "Delete a CV",
        description: "Delete a specific CV by its ID",
        parameters: [
          {
            name: "id",
            in: "query",
            required: true,
            schema: { type: "string" },
            description: "CV ID to delete"
          }
        ],
        responses: {
          200: {
            description: "CV deleted successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: { type: "boolean" }
                  }
                }
              }
            }
          },
          400: {
            description: "No ID provided",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Error" }
              }
            }
          },
          503: {
            description: "Database unavailable",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Error" }
              }
            }
          }
        }
      }
    },
    "/assess": {
      post: {
        tags: ["AI Analysis"],
        summary: "Get AI assessment of a CV",
        description: "Analyze a CV using AI to get scores across 6 sections, strengths, weaknesses, and recommendations.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  cv: { $ref: "#/components/schemas/ParsedCV" }
                },
                required: ["cv"]
              }
            }
          }
        },
        responses: {
          200: {
            description: "CV assessment results",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/AssessmentResponse" }
              }
            }
          },
          400: {
            description: "CV data not provided",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Error" }
              }
            }
          },
          500: {
            description: "AI service error",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Error" }
              }
            }
          }
        }
      }
    },
    "/advisor": {
      post: {
        tags: ["AI Analysis"],
        summary: "Get career advice from AI",
        description: "Chat with an AI career advisor about CV improvements. Supports conversation history for context.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  cv: { $ref: "#/components/schemas/ParsedCV" },
                  message: {
                    type: "string",
                    description: "User's question or message"
                  },
                  history: {
                    type: "array",
                    items: { $ref: "#/components/schemas/ChatMessage" },
                    description: "Previous conversation messages (last 10 used)"
                  }
                },
                required: ["cv", "message"]
              }
            }
          }
        },
        responses: {
          200: {
            description: "AI advisor response",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/AdvisorResponse" }
              }
            }
          },
          400: {
            description: "CV or message not provided",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Error" }
              }
            }
          }
        }
      }
    },
    "/jd-match": {
      post: {
        tags: ["AI Analysis"],
        summary: "Match CV against job description",
        description: "Compare a CV against a job description to get match score, skill gaps, and ATS optimization tips.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  cv: { $ref: "#/components/schemas/ParsedCV" },
                  jobDescription: {
                    type: "string",
                    description: "Full job description text"
                  }
                },
                required: ["cv", "jobDescription"]
              }
            }
          }
        },
        responses: {
          200: {
            description: "Job match analysis",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/JDMatchResponse" }
              }
            }
          },
          400: {
            description: "CV or job description not provided",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Error" }
              }
            }
          }
        }
      }
    }
  },
  components: {
    schemas: {
      Error: {
        type: "object",
        properties: {
          error: { type: "string" }
        }
      },
      TokenUsage: {
        type: "object",
        properties: {
          promptTokens: { type: "number" },
          completionTokens: { type: "number" },
          totalTokens: { type: "number" }
        }
      },
      Experience: {
        type: "object",
        properties: {
          id: { type: "string" },
          role: { type: "string" },
          company: { type: "string" },
          duration: { type: "string" },
          description: { type: "string", description: "Job responsibilities and achievements. Bullet points preserved with newlines." },
          location: { type: "string", description: "Optional job location (city, state/country)" }
        }
      },
      Education: {
        type: "object",
        properties: {
          id: { type: "string" },
          degree: { type: "string" },
          institution: { type: "string" },
          year: { type: "string" }
        }
      },
      Certification: {
        type: "object",
        properties: {
          id: { type: "string" },
          name: { type: "string" },
          issuer: { type: "string" },
          year: { type: "string" }
        }
      },
      ParsedCV: {
        type: "object",
        properties: {
          id: { type: "string" },
          name: { type: "string" },
          title: { type: "string" },
          email: { type: "string" },
          phone: { type: "string" },
          location: { type: "string" },
          website: { type: "string" },
          linkedin: { type: "string" },
          github: { type: "string" },
          summary: { type: "string" },
          experience: {
            type: "array",
            items: { $ref: "#/components/schemas/Experience" }
          },
          education: {
            type: "array",
            items: { $ref: "#/components/schemas/Education" }
          },
          certifications: {
            type: "array",
            items: { $ref: "#/components/schemas/Certification" }
          },
          skills: {
            type: "array",
            items: { type: "string" }
          },
          originalFilename: { type: "string" },
          mimeType: { type: "string" },
          size: { type: "number" },
          uploadedAt: { type: "string", format: "date-time" },
          tokenUsage: { $ref: "#/components/schemas/TokenUsage" }
        }
      },
      ParseResponse: {
        type: "object",
        properties: {
          cv: { $ref: "#/components/schemas/ParsedCV" },
          rawText: { type: "string" }
        }
      },
      BatchParseResult: {
        type: "object",
        properties: {
          fileName: { type: "string" },
          cv: { $ref: "#/components/schemas/ParsedCV" },
          rawText: { type: "string" },
          error: { type: "string", nullable: true }
        }
      },
      BatchParseResponse: {
        type: "object",
        properties: {
          results: {
            type: "array",
            items: { $ref: "#/components/schemas/BatchParseResult" }
          }
        }
      },
      SectionScore: {
        type: "object",
        properties: {
          name: { type: "string" },
          score: { type: "number" },
          feedback: { type: "string" }
        }
      },
      CVAssessment: {
        type: "object",
        properties: {
          overallScore: { type: "number" },
          sections: {
            type: "array",
            items: { $ref: "#/components/schemas/SectionScore" }
          },
          strengths: {
            type: "array",
            items: { type: "string" }
          },
          weaknesses: {
            type: "array",
            items: { type: "string" }
          },
          recommendations: {
            type: "array",
            items: { type: "string" }
          },
          tokenUsage: { $ref: "#/components/schemas/TokenUsage" }
        }
      },
      AssessmentResponse: {
        type: "object",
        properties: {
          assessment: { $ref: "#/components/schemas/CVAssessment" }
        }
      },
      ChatMessage: {
        type: "object",
        properties: {
          role: {
            type: "string",
            enum: ["user", "assistant"]
          },
          content: { type: "string" }
        }
      },
      AdvisorResponse: {
        type: "object",
        properties: {
          response: { type: "string" },
          tokenUsage: { $ref: "#/components/schemas/TokenUsage" }
        }
      },
      JDMatchResult: {
        type: "object",
        properties: {
          matchScore: { type: "number" },
          matchedSkills: {
            type: "array",
            items: { type: "string" }
          },
          missingSkills: {
            type: "array",
            items: { type: "string" }
          },
          experienceMatch: {
            type: "object",
            properties: {
              score: { type: "number" },
              feedback: { type: "string" }
            }
          },
          educationMatch: {
            type: "object",
            properties: {
              score: { type: "number" },
              feedback: { type: "string" }
            }
          },
          overallFeedback: { type: "string" },
          suggestions: {
            type: "array",
            items: { type: "string" }
          },
          keywordOptimizations: {
            type: "array",
            items: { type: "string" }
          },
          tokenUsage: { $ref: "#/components/schemas/TokenUsage" }
        }
      },
      JDMatchResponse: {
        type: "object",
        properties: {
          match: { $ref: "#/components/schemas/JDMatchResult" }
        }
      }
    }
  }
};
