import WorkspaceSection from "@/components/dashboard/WorkspaceSection";

const section = {
  "title": "Company & Team Settings",
  "description": "Manage your organization and recruiting team.",
  "workspace": "Company workspace",
  "features": [
    {
      "title": "Company profile",
      "description": "Maintain your organization\u2019s information."
    },
    {
      "title": "Team roles",
      "description": "Manage team member roles and reviewer assignments."
    },
    {
      "title": "Data retention",
      "description": "Define retention policies for candidate and hiring data."
    }
  ]
};

export default function Page() {
  return <WorkspaceSection {...section} />;
}
