"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eye, Pencil, Trash2, Plus, Search } from "lucide-react";
import { useState } from "react";
import CreateExamDialog from "./components/CreateExamDialog";

const exams = [
  {
    id: 1,
    title: "রাশিদ স্যার ফাইনাল",
    start: "18/01/2026 15:30",
    end: "19/01/2026 10:00",
    total: 3,
    highest: 36.75,
    type: "LIVE_EXAM",
  },
  {
    id: 2,
    title: "রবি : ফাইনাল মডেল টেস্ট - ৮",
    start: "12/01/2026 16:30",
    end: "12/01/2026 23:00",
    total: 0,
    highest: 0,
    type: "LIVE_EXAM",
  },
  {
    id: 3,
    title: "উচ্চতর গণিত সিলেবাস ফাইনাল",
    start: null,
    end: null,
    total: 0,
    highest: 0,
    type: "PRACTICE_EXAM",
  },
];

export default function ExamsPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-muted p-4 md:p-6 space-y-6">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
        <h1 className="text-2xl font-semibold text-foreground">Exams</h1>

        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <Input placeholder="Search exams..." className="pl-9 w-60" />
          </div>

          <Button variant="outline">Search</Button>

          <Button
            onClick={() => setOpen(true)}
            className="bg-primary text-white shadow-lg shadow-cyan-500/50"
          >
            <Plus size={16} className="mr-1" />
            New Exam
          </Button>
        </div>
      </div>

      <CreateExamDialog open={open} onClose={() => setOpen(false)} />

      {/* EXAM LIST */}
      <div className="space-y-4">
        {exams.map((exam) => (
          <Card
            key={exam.id}
            className="p-5 rounded-sm bg-card border-transparent shadow-aap"
          >
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
              {/* LEFT */}
              <div className="flex gap-4">
                <div className="h-20 w-20 rounded-md bg-muted flex items-center justify-center text-xs text-muted-foreground">
                  No Image
                </div>

                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground">
                    {exam.title}
                  </h3>

                  {exam.start && (
                    <p className="text-xs text-muted-foreground">
                      ⏱ {exam.start} - {exam.end}
                    </p>
                  )}

                  <p className="text-xs text-muted-foreground">
                    Total exam count:{" "}
                    <span className="font-medium text-foreground">
                      {exam.total}
                    </span>
                    &nbsp;&nbsp; Highest:{" "}
                    <span className="font-medium text-foreground">
                      {exam.highest}
                    </span>
                  </p>

                  <p className="text-xs text-muted-foreground">
                    ভার্সিটি স্কোয়াড (এক কোর্স এক প্রশ্ন) • রবি স্যার মডেল টেস্ট
                  </p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-3">
                <span className="text-[10px] px-2 py-1 rounded bg-muted text-muted-foreground">
                  {exam.type}
                </span>

                <Button
                  size="icon"
                  variant="outline"
                  className="h-8 w-8 text-blue-600"
                >
                  <Eye size={16} />
                </Button>

                <Button
                  size="icon"
                  variant="outline"
                  className="h-8 w-8 text-green-600"
                >
                  <Pencil size={16} />
                </Button>

                <Button
                  size="icon"
                  variant="outline"
                  className="h-8 w-8 text-destructive"
                >
                  <Trash2 size={16} />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* PAGINATION */}
      <div>
        <Button className="bg-primary text-white shadow-lg shadow-cyan-500/50">
          Next Page
        </Button>
      </div>
    </div>
  );
}
