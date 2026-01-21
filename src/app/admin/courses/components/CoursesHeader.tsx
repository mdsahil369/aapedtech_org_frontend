"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { CoursesView } from "../page";

type Props = {
  activeView: CoursesView;
  onChange: (view: CoursesView) => void;
};

export default function CoursesHeader({ activeView, onChange }: Props) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
        {/* LEFT: BACK + TITLE */}
        <div className="flex items-center gap-3">
          <Button onClick={() => router.back()} size="icon" variant="outline">
            <ArrowLeft size={16} />
          </Button>

          <div>
            <h1 className="text-lg sm:text-xl font-semibold">Total Enrolled</h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Total Enrolled Students in all courses
            </p>
          </div>
        </div>

        {/* RIGHT: TABS */}
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => onChange("courses")}
            className={"bg-primary text-white shadow-lg shadow-cyan-500/50"}
          >
            ALL Course
          </Button>

          <Button
            onClick={() => onChange("affiliation")}
            className={
              "bg-purple-500 text-white shadow-lg shadow-purple-500/50 hover:bg-purple-600"
            }
          >
            Affiliation
          </Button>
          <Button
            onClick={() => onChange("student-data")}
            className={
              "bg-green-500 text-white shadow-lg shadow-green-500/50 hover:bg-green-600"
            }
          >
            Student Database
          </Button>
        </div>
      </div>
    </div>
  );
}
