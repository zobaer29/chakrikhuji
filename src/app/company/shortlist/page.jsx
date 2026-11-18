import WorkspaceSection from "@/components/dashboard/WorkspaceSection";

const section = {
  "title": "Review & Shortlist Queue",
  "description": "Review candidates with evidence and human judgment.",
  "workspace": "Company workspace",
  "features": [
    {
      "title": "Pipeline stages",
      "description": "Review New, In Review, Shortlisted, and Rejected candidates."
    },
    {
      "title": "Human-review queue",
      "description": "Review borderline candidates near the shortlist cutoff in the fairness-aware boundary group."
    },
    {
      "title": "Evidence & collaboration",
      "description": "Review cited CV snippets, adjust criteria, and add notes, tags, and structured feedback."
    }
  ]
};

export default function Page() {
  return <WorkspaceSection {...section} />;
}
