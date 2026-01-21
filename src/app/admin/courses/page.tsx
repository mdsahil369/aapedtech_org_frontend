"use client";

import { useState } from "react";
import CoursesHeader from "./components/CoursesHeader";
import CoursesTable from "./components/CoursesTable";
import StudentDatabase from "./(studentdata)/StudentDatabase";
import Affiliation from "./(affiliation)/Affiliation";

export type CoursesView = "courses" | "student-data" | "affiliation";

export default function CoursesPage() {
  const [activeView, setActiveView] = useState<CoursesView>("courses");

  return (
    <div className="min-h-screen bg-muted p-4 md:p-6 space-y-6">
      <CoursesHeader activeView={activeView} onChange={setActiveView} />

      {/* CONTENT SWITCH */}
      {activeView === "courses" && <CoursesTable />}
      {activeView === "student-data" && <StudentDatabase />}
      {activeView === "affiliation" && <Affiliation />}
    </div>
  );
}
