import WorkspaceSection from "@/components/dashboard/WorkspaceSection";

const section = {
  "title": "Dashboard",
  "description": "Keep track of your hiring workflow.",
  "workspace": "Company workspace",
  "features": [
    {
      "title": "Open roles",
      "description": "Overview of active job openings."
    },
    {
      "title": "Incoming CVs",
      "description": "Recent CV submissions and parsing status."
    },
    {
      "title": "Pending reviews",
      "description": "Candidates awaiting recruiter review."
    },
    {
      "title": "Awaiting approval",
      "description": "AI actions requiring human approval before execution."
    }
  ]
};

export default function Page() {
  return <WorkspaceSection {...section} />;
}
