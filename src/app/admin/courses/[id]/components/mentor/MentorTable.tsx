"use client";

import { useState } from "react";
import { Plus, Trash2, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

import CreateMentorPopup from "./CreateMentorPopup";
import CreateCoursePreparationPopup from "./CreateCoursePreparationPopup";

/* ================= MOCK DATA ================= */

const mentors = [
  {
    id: 1,
    name: "Sahil Hossain",
    tag: "Physics Mentor",
    experience: "2 year",
    serial: 1,
  },
];

const preparations = [
  {
    id: 1,
    name: "HSC Final Preparation",
    tag: "Physics",
    serial: 1,
  },
];

/* ================= PAGE ================= */

export default function CourseMentorPreparationPage() {
  const [openMentor, setOpenMentor] = useState(false);
  const [openPreparation, setOpenPreparation] = useState(false);

  return (
    <>
      <div className="space-y-10">
        {/* ==================== MENTORS ===================== */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Mentors</h3>

            <Button
              size="sm"
              className="bg-primary text-white shadow-lg shadow-cyan-500/50"
              onClick={() => setOpenMentor(true)}
            >
              Add Mentor
            </Button>
          </div>

          <div className="rounded-sm border border-border bg-card overflow-x-auto">
            <table className="w-full min-w-[700px] text-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border text-muted-foreground">
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Serial</th>
                  <th className="px-4 py-3 text-left">Experience</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>

              <tbody>
                {mentors.map((mentor) => (
                  <tr
                    key={mentor.id}
                    className="border-b border-border last:border-none"
                  >
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-xs">
                          IMG
                        </div>
                        <div>
                          <p className="font-medium">{mentor.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {mentor.tag}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-4">{mentor.serial}</td>
                    <td className="px-4 py-4">{mentor.experience}</td>

                    <td className="px-4 py-4 text-right space-x-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => setOpenMentor(true)}
                      >
                        <Pencil size={16} />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <Trash2 size={16} className="text-red-500" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ================= PREPARATIONS =================== */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Preparations</h3>

            <Button
              size="sm"
              className="bg-primary text-white shadow-lg shadow-cyan-500/50"
              onClick={() => setOpenPreparation(true)}
            >
              Create Preparation
            </Button>
          </div>

          <div className="rounded-sm border border-border bg-card overflow-x-auto">
            <table className="w-full min-w-[650px] text-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border text-muted-foreground">
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Serial</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>

              <tbody>
                {preparations.map((prep) => (
                  <tr
                    key={prep.id}
                    className="border-b border-border last:border-none"
                  >
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-xs">
                          IMG
                        </div>
                        <div>
                          <p className="font-medium">{prep.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {prep.tag}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-4">{prep.serial}</td>

                    <td className="px-4 py-4 text-right space-x-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => setOpenPreparation(true)}
                      >
                        <Pencil size={16} />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <Trash2 size={16} className="text-red-500" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ================= POPUPS ================= */}
      <CreateMentorPopup
        open={openMentor}
        onOpenChange={setOpenMentor}
      />

      <CreateCoursePreparationPopup
        open={openPreparation}
        onOpenChange={setOpenPreparation}
      />
    </>
  );
}
