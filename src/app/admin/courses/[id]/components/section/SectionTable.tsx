"use client";

import { useState } from "react";
import { Plus, Trash2, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

import CreateSectionPopup from "./CreateSectionPopup";

const sections = [
  { id: 1, title: "১ম অধ্যায়", serial: 1 },
  { id: 2, title: "২য় অধ্যায়", serial: 2 },
];

export default function SectionTable() {
  const [openSection, setOpenSection] = useState(false);

  return (
    <>
      <div className="space-y-4">
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold">Sections</h3>
          <Button
            size="sm"
            className="bg-primary text-white shadow-lg shadow-cyan-500/50 flex items-center gap-1"
            onClick={() => setOpenSection(true)}
          >
            <Plus size={14} />
            Add Section
          </Button>
        </div>

        {/* TABLE */}
        <div className="rounded-sm border border-border mb-2 overflow-x-auto bg-card">
          <table className="w-full min-w-[500px] text-sm">
            <thead>
              <tr className="bg-muted/50 border-b border-border">
                <th className="px-4 py-3 text-left">Title</th>
                <th className="px-4 py-3 text-left">Serial</th>
                <th className="px-4 py-3 text-right">Action</th>
              </tr>
            </thead>

            <tbody>
              {sections.map((section) => (
                <tr
                  key={section.id}
                  className="border-b border-border last:border-none"
                >
                  <td className="px-4 py-3 font-medium">{section.title}</td>
                  <td className="px-4 py-3">{section.serial}</td>
                  <td className="px-4 py-3 text-right">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => setOpenSection(true)}
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

      {/* POPUP */}
      <CreateSectionPopup
        open={openSection}
        onOpenChange={setOpenSection}
      />
    </>
  );
}
