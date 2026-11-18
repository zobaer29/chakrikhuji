import WorkspaceSection from "@/components/dashboard/WorkspaceSection";

const section = {
  "title": "My Applications",
  "description": "Follow your applications through each hiring stage.",
  "workspace": "Job seeker workspace",
  "features": [
    {
      "title": "Application tracker",
      "description": "View current hiring stages for each application."
    },
    {
      "title": "Status updates",
      "description": "Review recent changes and recruiter updates."
    }
  ]
};

export default function Page() {
  return <WorkspaceSection {...section} />;
}
