import { useState } from "react";
import { CVPreview, type ParsedCV } from "../CVPreview";
import { ThemeProvider } from "../ThemeProvider";

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
  summary: "Experienced software engineer with 8+ years building scalable web applications. Passionate about clean code, team collaboration, and continuous learning.",
  experience: [
    {
      id: "exp1",
      company: "Tech Corp Inc.",
      role: "Senior Software Engineer",
      duration: "2020 - Present",
      description: "Lead development of microservices architecture serving 10M+ users. Mentored junior developers and established best practices.",
    },
    {
      id: "exp2",
      company: "Startup Labs",
      role: "Full Stack Developer",
      duration: "2017 - 2020",
      description: "Built React/Node.js applications from scratch. Implemented CI/CD pipelines and improved deployment speed by 60%.",
    },
  ],
  education: [
    {
      id: "edu1",
      institution: "Stanford University",
      degree: "M.S. Computer Science",
      year: "2017",
    },
    {
      id: "edu2",
      institution: "UC Berkeley",
      degree: "B.S. Computer Science",
      year: "2015",
    },
  ],
  skills: ["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS", "Docker", "GraphQL", "REST APIs", "Git"],
};

export default function CVPreviewExample() {
  const [cv, setCV] = useState<ParsedCV>(mockCV);

  return (
    <ThemeProvider>
      <div className="bg-background h-[600px] overflow-hidden rounded-lg border border-border">
        <CVPreview cv={cv} template="modern-dark" onUpdate={setCV} />
      </div>
    </ThemeProvider>
  );
}
