"use client";

import { useState } from "react";
import { Plus, Trash2, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import CreateChaptersPopup from "./CreateChaptersPopup";

const chapters = [
  {
    id: 1,
    subject: "পদার্থবিজ্ঞান",
    title: "ভেক্টর ও স্কেলার",
    serial: 1,
  },
  {
    id: 2,
    subject: "রসায়ন",
    title: "পরমাণু গঠন",
    serial: 2,
  },
];

const subjects = ["পদার্থবিজ্ঞান", "রসায়ন", "গণিত"];

export default function ChapterTable() {
  const [openChapter, setOpenChapter] = useState(false);

  return (
    <>
      <div className="space-y-4">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <h3 className="text-base font-semibold">Chapters</h3>

          <div className="flex gap-2">
            <Select defaultValue={subjects[0]}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by subject" />
              </SelectTrigger>
              <SelectContent>
                {subjects.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              size="sm"
              className="bg-primary text-white shadow-lg shadow-cyan-500/50 flex items-center gap-1"
              onClick={() => setOpenChapter(true)}
            >
              <Plus size={14} />
              Add Chapter
            </Button>
          </div>
        </div>

        {/* TABLE */}
        <div className="rounded-sm border border-border mb-2 overflow-x-auto bg-card">
          <table className="w-full min-w-[700px] text-sm">
            <thead>
              <tr className="bg-muted/50 border-b border-border">
                <th className="px-4 py-3 text-left">Subject</th>
                <th className="px-4 py-3 text-left">Title</th>
                <th className="px-4 py-3 text-left">Serial</th>
                <th className="px-4 py-3 text-right">Action</th>
              </tr>
            </thead>

            <tbody>
              {chapters.map((chapter) => (
                <tr
                  key={chapter.id}
                  className="border-b border-border last:border-none"
                >
                  <td className="px-4 py-3">{chapter.subject}</td>
                  <td className="px-4 py-3 font-medium">{chapter.title}</td>
                  <td className="px-4 py-3">{chapter.serial}</td>
                  <td className="px-4 py-3 text-right">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => setOpenChapter(true)}
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
      <CreateChaptersPopup
        open={openChapter}
        onOpenChange={setOpenChapter}
      />
    </>
  );
}
