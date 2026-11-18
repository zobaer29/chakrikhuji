import WorkspaceSidebar from "@/components/dashboard/WorkspaceSidebar";

const config = {
  "id": "company",
  "title": "Company dashboard",
  "group": "Recruitment",
  "tagline": "Make your next hire",
  "basePath": "/company",
  "sections": [
    {
      "id": "dashboard",
      "label": "Dashboard",
      "path": "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z"
    },
    {
      "id": "jobs",
      "label": "Jobs",
      "path": "M8 6V4h8v2M3 7h18v14H3zM3 12h18M10 12v3h4v-3"
    },
    {
      "id": "candidates",
      "label": "Candidates & Batch Upload",
      "path": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M17 4h5M19.5 1.5v5"
    },
    {
      "id": "shortlist",
      "label": "Review & Shortlist Queue",
      "path": "M6 3h12v18l-6-4-6 4zM9 9l2 2 4-4"
    },
    {
      "id": "assistant",
      "label": "AI Recruiter Assistant & Approvals",
      "path": "M4 4h16v12H9l-5 4zM8 9h1M12 9h1M16 9h1"
    },
    {
      "id": "reports",
      "label": "Workflow Reports",
      "path": "M4 3v18h17M8 17v-5M13 17V8M18 17V5"
    },
    {
      "id": "audit-logs",
      "label": "Audit Logs",
      "path": "M14 2H4v20h16V8zM14 2v6h6M8 12h8M8 16h8"
    },
    {
      "id": "settings",
      "label": "Company & Team Settings",
      "path": "M12 3v3M12 18v3M3 12h3M18 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
    }
  ]
};

export default function CompanySidebar() {
  return <WorkspaceSidebar config={config} />;
}
