"use client";

import clsx from "clsx";

const tabs = [
  { key: "basic", label: "Basic" },
  { key: "section", label: "Section" },
  { key: "mentor", label: "Mentor" },
  { key: "routine", label: "Routine" },
  { key: "features", label: "Features" },
] as const;

export type CourseTabKey =
  | "basic"
  | "section"
  | "mentor"
  | "routine"
  | "features";

type Props = {
  active: CourseTabKey;
  onChange: (tab: CourseTabKey) => void;
};

export default function CourseTabs({ active, onChange }: Props) {
  return (
    <div className="relative">
      {/* Scroll container */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar rounded-xl bg-card p-1 w-fit max-w-full">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={clsx(
              "px-4 py-2 text-sm rounded-lg whitespace-nowrap transition-all cursor-pointer",
              "focus:outline-none",
              active === tab.key
                ? "bg-muted/50 text-foreground shadow-sm"
                : "text-muted-foreground hover:bg-card/50",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
