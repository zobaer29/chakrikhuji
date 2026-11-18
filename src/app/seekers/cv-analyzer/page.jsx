import WorkspaceSection from "@/components/dashboard/WorkspaceSection";

const section = {
  "title": "CV Analyzer",
  "description": "Compare your CV with a job description.",
  "workspace": "Job seeker workspace",
  "features": [
    {
      "title": "CV vs. job description",
      "description": "Review your CV and target job description side by side."
    },
    {
      "title": "Skill gaps",
      "description": "Understand missing or underrepresented skills."
    },
    {
      "title": "ATS readiness",
      "description": "Review formatting and readability tips."
    },
    {
      "title": "Bullet suggestions",
      "description": "Review and approve AI suggestions before changing your CV."
    }
  ]
};

export default function Page() {
  return <WorkspaceSection {...section} />;
}
