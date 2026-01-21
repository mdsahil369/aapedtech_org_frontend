"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, Plus, ArrowLeft } from "lucide-react";

import AddAdmissionNewsDialog from "./components/AddAdmissionNewsDialog";

const newsList = [
  {
    id: 1,
    category: "Medical",
    heading: "Medical Admission 2026 Notice",
    description: "Medical admission exam date and syllabus has been published.",
    cover: "medical-cover.jpg",
    bgColor: "#E0F2FE",
  },
];

export default function AdmissionNewsPage() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-muted p-4 md:p-6 space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button onClick={() => router.back()} size="icon" variant="outline">
            <ArrowLeft size={16} />
          </Button>
          <div>
            <h1 className="text-lg sm:text-xl font-semibold">Admission News</h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Manage admission news and announcements
            </p>
          </div>
        </div>

        <Button
          onClick={() => setOpen(true)}
          className="bg-primary text-white shadow-lg shadow-cyan-500/50"
        >
          <Plus size={16} className="mr-1" />
          Add News
        </Button>
      </div>

      {/* TABLE */}
      <Card className="rounded-sm bg-card border-transparent shadow-aap">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-sm">
            <thead>
              <tr className="bg-muted border-b border-border">
                {[
                  "Category",
                  "Short Heading",
                  "Description",
                  "Cover",
                  "Bg Color",
                  "Actions",
                ].map((h) => (
                  <th key={h} className="px-4 py-3 text-left font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {newsList.map((news) => (
                <tr key={news.id} className="border-b hover:bg-muted/50">
                  <td className="px-4 py-3">{news.category}</td>
                  <td className="px-4 py-3 font-medium">{news.heading}</td>
                  <td className="px-4 py-3 max-w-[300px] truncate">
                    {news.description}
                  </td>
                  <td className="px-4 py-3">
                    <div className="h-10 w-16 rounded bg-muted flex items-center justify-center text-xs">
                      Cover
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span
                        className="h-5 w-5 rounded"
                        style={{ backgroundColor: news.bgColor }}
                      />
                      <span className="text-xs text-muted-foreground">
                        {news.bgColor}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 flex gap-3">
                    {/* EDIT → SAME POPUP */}
                    <button
                      onClick={() => setOpen(true)}
                      className="text-blue-600 hover:opacity-80"
                    >
                      <Pencil size={16} />
                    </button>
                    <button className="text-destructive hover:opacity-80">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* POPUP */}
      <AddAdmissionNewsDialog open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
