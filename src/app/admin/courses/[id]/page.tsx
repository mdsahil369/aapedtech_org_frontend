"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import CourseTabs from "./components/CourseTabs";
import MentorTable from "./components/mentor/MentorTable";
import ChapterTable from "./components/section/ChapterTable";
import SectionTable from "./components/section/SectionTable";
import SubjectTable from "./components/section/SubjectTable";
import RoutineTable from "./components/routine/RoutineTable";
import Descriptions from "./components/features/Descriptions";
import CourseGifts from "./components/features/CourseGifts";
import DescriptionVideos from "./components/features/DescriptionVideos";
import DueSystem from "./components/features/DueSystem";
import UpdatePhotos from "./components/features/UpdatePhotos";
import CourseBasicForm from "./components/basic/CourseBasicForm";

type TabKey = "basic" | "section" | "mentor" | "routine" | "features";

export default function EditCoursePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabKey>("basic");

  return (
    <div className="min-h-screen bg-muted px-4 md:px-6 py-6 space-y-6">
      {/* ================= HEADER ================= */}
      <div className="flex items-center gap-3">
        <Button onClick={() => router.back()} size="icon" variant="outline">
          <ArrowLeft size={16} />
        </Button>
        <div>
          <h1 className="text-lg sm:text-xl font-semibold">Edit Course</h1>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Update course information, content and settings
          </p>
        </div>
      </div>

      {/* ================= TABS ================= */}
      <CourseTabs active={activeTab} onChange={setActiveTab} />

      {/* ================= TAB CONTENT ================= */}
      <div className="rounded-sm bg-card border-transparent p-4 md:p-6 shadow-aap">
        {activeTab === "basic" && (
          <div className="text-sm text-muted-foreground">
            <CourseBasicForm />
          </div>
        )}

        {activeTab === "section" && (
          <div className="text-sm text-muted-foreground">
            Section management will be added here
            <SectionTable />
            <SubjectTable />
            <ChapterTable />
          </div>
        )}

        {activeTab === "mentor" && (
          <div className="text-sm text-muted-foreground">
            <MentorTable />
          </div>
        )}

        {activeTab === "routine" && (
          <div className="text-sm text-muted-foreground">
            Routine management will be added here
            <RoutineTable />
          </div>
        )}

        {activeTab === "features" && (
          <div className="text-sm text-muted-foreground">
            Feature settings will be added here
            <Descriptions />
            <CourseGifts />
            <DescriptionVideos />
            <DueSystem />
            <UpdatePhotos />
          </div>
        )}
      </div>
    </div>
  );
}
