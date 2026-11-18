import WorkspaceSection from "@/components/dashboard/WorkspaceSection";

const section = {
  "title": "Candidates & Batch Upload",
  "description": "Manage your candidate directory and CV imports.",
  "workspace": "Company workspace",
  "features": [
    {
      "title": "Bulk upload",
      "description": "Import PDF or DOCX CVs in batches."
    },
    {
      "title": "Parsing progress",
      "description": "Monitor processing progress and parsing error logs."
    },
    {
      "title": "Candidate directory",
      "description": "Browse candidates and their submitted CVs."
    }
  ]
};

export default function Page() {
  return <WorkspaceSection {...section} />;
}
