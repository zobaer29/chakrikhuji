import WorkspaceSection from "@/components/dashboard/WorkspaceSection";

const section = {
  "title": "Audit Logs",
  "description": "Trace hiring criteria, AI actions, and human decisions.",
  "workspace": "Company workspace",
  "features": [
    {
      "title": "Criteria versions",
      "description": "Review changes to shortlist criteria over time."
    },
    {
      "title": "Model & agent history",
      "description": "Track AI model versions and agent actions."
    },
    {
      "title": "Human overrides",
      "description": "Review human reviewer overrides and their recorded context."
    }
  ]
};

export default function Page() {
  return <WorkspaceSection {...section} />;
}
