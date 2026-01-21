"use client";

import { useState } from "react";
import { Plus, Trash2, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

import CreateRoutinePopup from "./CreateRoutinePopup";

const routines = [
  {
    id: 1,
    title: "সাপ্তাহিক লাইভ ক্লাস রুটিন",
    serial: 1,
  },
  {
    id: 2,
    title: "ডেইলি প্র্যাকটিস সেশন",
    serial: 2,
  },
  {
    id: 3,
    title: "মডেল টেস্ট ও রিভিশন",
    serial: 3,
  },
];

export default function RoutineTable() {
  const [openRoutine, setOpenRoutine] = useState(false);

  return (
    <>
      <div className="space-y-4">
        {/* ================= HEADER ================= */}
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold">Course Routines</h3>

          <Button
            size="sm"
            className="bg-primary text-white shadow-lg shadow-cyan-500/50 flex items-center gap-1"
            onClick={() => setOpenRoutine(true)}
          >
            <Plus size={14} />
            Add Routine
          </Button>
        </div>

        {/* ================= TABLE ================= */}
        <div className="rounded-sm border border-border overflow-x-auto bg-card">
          <table className="w-full min-w-[500px] text-sm">
            <thead>
              <tr className="bg-muted/50 border-b border-border">
                <th className="px-4 py-3 text-left font-medium">Title</th>
                <th className="px-4 py-3 text-left font-medium">Serial</th>
                <th className="px-4 py-3 text-right font-medium">Action</th>
              </tr>
            </thead>

            <tbody>
              {routines.map((routine) => (
                <tr
                  key={routine.id}
                  className="border-b border-border last:border-none"
                >
                  <td className="px-4 py-3 font-medium">{routine.title}</td>
                  <td className="px-4 py-3">{routine.serial}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="inline-flex gap-1">
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => setOpenRoutine(true)}
                      >
                        <Pencil size={16} />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <Trash2 size={16} className="text-red-500" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= POPUP ================= */}
      <CreateRoutinePopup
        open={openRoutine}
        onOpenChange={setOpenRoutine}
      />
    </>
  );
}
