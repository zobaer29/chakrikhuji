import WorkspaceSection from "@/components/dashboard/WorkspaceSection";

const section = {
  "title": "Dashboard",
  "description": "Your job search at a glance.",
  "workspace": "Job seeker workspace",
  "features": [
    {
      "title": "Applications",
      "description": "Active applications and recent hiring updates."
    },
    {
      "title": "CV analysis",
      "description": "Recent analysis status and suggested next steps."
    },
    {
      "title": "Saved jobs",
      "description": "Opportunities saved for later."
    },
    {
      "title": "Learning progress",
      "description": "Skill roadmap milestones and completed learning."
    }
  ]
};

export default function Page() {
  return <WorkspaceSection {...section} />;
}
