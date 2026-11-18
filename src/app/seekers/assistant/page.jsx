import WorkspaceSection from "@/components/dashboard/WorkspaceSection";

const section = {
  "title": "AI Career Assistant",
  "description": "Get support throughout your job search.",
  "workspace": "Job seeker workspace",
  "features": [
    {
      "title": "Career guidance",
      "description": "Discuss job-search questions with a conversational assistant."
    },
    {
      "title": "Reminders",
      "description": "Plan follow-ups and application reminders."
    },
    {
      "title": "Interview preparation",
      "description": "Practice interview questions and prepare examples."
    }
  ]
};

export default function Page() {
  return <WorkspaceSection {...section} />;
}
