import WorkspaceSection from "@/components/dashboard/WorkspaceSection";

const section = {
  "title": "Jobs",
  "description": "Create and manage your role requirements.",
  "workspace": "Company workspace",
  "features": [
    {
      "title": "Job descriptions",
      "description": "Manage job descriptions and required or preferred skills."
    },
    {
      "title": "Pre-review filters",
      "description": "Define eligibility criteria before candidate review."
    },
    {
      "title": "Criteria weights",
      "description": "Set and review the weights used in candidate evaluation."
    }
  ]
};

export default function Page() {
  return <WorkspaceSection {...section} />;
}
