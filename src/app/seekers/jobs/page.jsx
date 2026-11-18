import WorkspaceSection from "@/components/dashboard/WorkspaceSection";

const section = {
  "title": "Find Jobs",
  "description": "Discover opportunities and understand why they fit your CV.",
  "workspace": "Job seeker workspace",
  "features": [
    {
      "title": "Job search",
      "description": "Filter by role, location, and work arrangement."
    },
    {
      "title": "Saved jobs",
      "description": "Save opportunities and return to them later."
    },
    {
      "title": "Why this fits your CV",
      "description": "Explainable match reasons grounded in your experience and skills."
    }
  ]
};

export default function Page() {
  return <WorkspaceSection {...section} />;
}
