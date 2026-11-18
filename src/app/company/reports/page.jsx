import WorkspaceSection from "@/components/dashboard/WorkspaceSection";

const section = {
  "title": "Workflow Reports",
  "description": "Understand aggregate hiring workflow performance.",
  "workspace": "Company workspace",
  "features": [
    {
      "title": "Time in stage",
      "description": "Review aggregate time spent in each hiring stage."
    },
    {
      "title": "Review activity",
      "description": "Track total candidates reviewed and workflow throughput, excluding sensitive or demographic traits."
    }
  ]
};

export default function Page() {
  return <WorkspaceSection {...section} />;
}
