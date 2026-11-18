import WorkspaceSection from "@/components/dashboard/WorkspaceSection";

const section = {
  "title": "AI Recruiter Assistant & Approvals",
  "description": "Coordinate recruiting tasks with human approval.",
  "workspace": "Company workspace",
  "features": [
    {
      "title": "Recruiter copilot",
      "description": "Discuss candidate evidence and recruiting tasks."
    },
    {
      "title": "Approval Inbox",
      "description": "Confirm candidate emails, stage updates, and interview scheduling before execution."
    }
  ]
};

export default function Page() {
  return <WorkspaceSection {...section} />;
}
