import WorkspaceSection from "@/components/dashboard/WorkspaceSection";

const section = {
  "title": "Skill Roadmap",
  "description": "Plan learning for your target role.",
  "workspace": "Job seeker workspace",
  "features": [
    {
      "title": "Target-role skills",
      "description": "Identify skills to develop for your next opportunity."
    },
    {
      "title": "Learning resources",
      "description": "Explore role-based learning paths on roadmap.sh."
    },
    {
      "title": "Progress tracking",
      "description": "Track learning as In Progress or Completed."
    }
  ]
};

export default function Page() {
  return <WorkspaceSection {...section} />;
}
