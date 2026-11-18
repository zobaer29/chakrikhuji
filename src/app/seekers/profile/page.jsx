import WorkspaceSection from "@/components/dashboard/WorkspaceSection";

const section = {
  "title": "My CVs & Profile",
  "description": "Manage your career profile and CV versions.",
  "workspace": "Job seeker workspace",
  "features": [
    {
      "title": "Profile management",
      "description": "Maintain your experience, skills, and job preferences."
    },
    {
      "title": "CV upload",
      "description": "Upload PDF or DOCX CVs for processing."
    },
    {
      "title": "Parsing corrections",
      "description": "Review extracted details and correct parsing errors."
    },
    {
      "title": "Version history",
      "description": "Keep track of CV versions and revisions."
    }
  ]
};

export default function Page() {
  return <WorkspaceSection {...section} />;
}
