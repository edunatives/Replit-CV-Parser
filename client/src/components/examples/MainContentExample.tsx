import { useState } from "react";
import { MainContent } from "../MainContent";
import { ThemeProvider } from "../ThemeProvider";
import type { ParsedCV } from "../CVPreview";

const mockCV: ParsedCV = {
  id: "1",
  name: "John Smith",
  title: "Senior Software Engineer",
  email: "john.smith@email.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  website: "johnsmith.dev",
  linkedin: "linkedin.com/in/johnsmith",
  github: "github.com/johnsmith",
  summary: "Experienced software engineer with 8+ years building scalable web applications.",
  experience: [
    {
      id: "exp1",
      company: "Tech Corp Inc.",
      role: "Senior Software Engineer",
      duration: "2020 - Present",
      description: "Lead development of microservices architecture.",
    },
  ],
  education: [
    {
      id: "edu1",
      institution: "Stanford University",
      degree: "M.S. Computer Science",
      year: "2017",
    },
  ],
  skills: ["React", "TypeScript", "Node.js", "Python", "AWS"],
};

const mockRawText = `John Smith
Senior Software Engineer
john.smith@email.com | +1 (555) 123-4567
San Francisco, CA

EXPERIENCE
Senior Software Engineer at Tech Corp Inc.
2020 - Present
Lead development of microservices architecture.

EDUCATION
M.S. Computer Science - Stanford University (2017)

SKILLS
React, TypeScript, Node.js, Python, AWS`;

export default function MainContentExample() {
  const [cv, setCV] = useState<ParsedCV>(mockCV);

  return (
    <ThemeProvider>
      <div className="bg-background p-4 h-[500px]">
        <MainContent
          cv={cv}
          rawText={mockRawText}
          template="modern-dark"
          onUpdateCV={setCV}
        />
      </div>
    </ThemeProvider>
  );
}
