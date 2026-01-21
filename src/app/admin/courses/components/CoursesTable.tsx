"use client";

import { Eye, Pencil, Trash2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import CreateCoursePopup from "./CreateCoursePopup";

const courses = [
  {
    id: 1,
    name: "একাডেমিক টেস্ট পেপার সলভ কোর্স",
    price: 0,
    enrolled: 0,
    status: "Hide",
  },
  {
    id: 2,
    name: "ভার্সিটি ফাইনাল নোট (ফুল কোর্স)",
    price: 1000,
    enrolled: 142,
    status: "Visible",
  },
  {
    id: 3,
    name: "ভার্সিটি + গুচ্ছ ফাইনাল কোর্স",
    price: 3000,
    enrolled: 6831,
    status: "Visible",
  },
];

export default function CoursesTable() {
  const [openCreate, setOpenCreate] = useState(false);
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        {/* LEFT: SEARCH */}
        <Input
          placeholder="Search courses by name..."
          className="w-full sm:max-w-md"
        />

        {/* RIGHT: ACTION */}
        <Button
          onClick={() => setOpenCreate(true)}
          className="bg-primary text-white shadow-lg shadow-cyan-500/50 w-full sm:w-auto"
        >
          Create Course
        </Button>
        <CreateCoursePopup open={openCreate} onOpenChange={setOpenCreate} />
      </div>

      <div className="rounded-sm bg-card border border-border overflow-x-auto">
        <table className="w-full min-w-[800px] text-sm">
          <thead>
            <tr className="bg-muted/50 border-b border-border">
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Price</th>
              <th className="px-4 py-3 text-left">Enrolled</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {courses.map((course) => (
              <tr
                key={course.id}
                className="border-b border-border last:border-none"
              >
                <td className="px-4 py-3 font-medium">{course.name}</td>
                <td className="px-4 py-3">{course.price}</td>
                <td className="px-4 py-3">{course.enrolled}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      course.status === "Visible"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {course.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-2">
                    <Button size="icon" variant="ghost">
                      <Download size={16} />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <Eye size={16} />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <Link href={`/admin/courses/1`}>
                        <Pencil size={16} />
                      </Link>
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
    </>
  );
}
