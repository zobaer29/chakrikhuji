import WorkspaceSection from "@/components/dashboard/WorkspaceSection";

const section = {
  "title": "Privacy & Settings",
  "description": "Control your account preferences and CV data.",
  "workspace": "Job seeker workspace",
  "features": [
    {
      "title": "Account preferences",
      "description": "Manage account and notification preferences."
    },
    {
      "title": "Processing consent",
      "description": "Control consent for CV processing."
    },
    {
      "title": "Data deletion",
      "description": "Request deletion of CVs and account data."
    }
  ]
};

export default function Page() {
  return <WorkspaceSection {...section} />;
}
