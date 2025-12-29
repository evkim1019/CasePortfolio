import { ArrowLeft, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CaseStudyPlaceholderProps {
  title: string;
  badge: string;
  summary: string;
}

export function CaseStudyPlaceholder({ title, badge, summary }: CaseStudyPlaceholderProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-6 pb-16 pt-6 glass-page">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-slate-100/90 hover: transition-colors glass-button"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </button>
      </div>

      <div className="max-w-5xl mx-auto mt-10 glass-surface rounded-3xl p-10 border border-white/10 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-chip text-sm mb-6">
          <Sparkles className="h-4 w-4" />
          <span>{badge}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold  mb-4">{title}</h1>
        <p className=" text-lg leading-relaxed max-w-3xl mb-10">
          {summary}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6 rounded-2xl border border-white/10">
            <h3 className=" text-xl mb-2">Full case study coming soon</h3>
            <p className="">
              This page will be updated with detailed research insights, process, outcomes, and artifacts.
            </p>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-white/10">
            <h3 className=" text-xl mb-2">Want the deep dive?</h3>
            <p className=" mb-4">
              Reach out to schedule a walkthrough of the project and results.
            </p>
            <button
              onClick={() => (window.location.href = "mailto:alex@example.com")}
              className="px-5 py-3 rounded-full bg-white/20  font-medium hover:bg-white/30 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
