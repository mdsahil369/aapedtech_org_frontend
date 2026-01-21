"use client";

import { Trash2, Plus, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import CreateCourseDescriptionPopup from "./(components)/CreateCourseDescriptionPopup";

const descriptions = [
  { id: 1, question: "এই কোর্সটি কার জন্য?", serial: 1 },
  { id: 2, question: "এই কোর্সে কী কী থাকবে?", serial: 2 },
];

export default function Descriptions() {
  const [openDesc, setOpenDesc] = useState(false);

  return (
    <>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold">Course Descriptions</h3>
          <Button
            size="sm"
            className="bg-primary text-white shadow-lg shadow-cyan-500/50"
            onClick={() => setOpenDesc(true)}
          >
            <Plus size={14} />
            Add
          </Button>
        </div>

        <div className="space-y-3">
          {descriptions.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row gap-3 rounded-sm mb-2 border border-border p-4"
            >
              <Input defaultValue={item.question} />
              <Input
                defaultValue={item.serial}
                className="sm:max-w-[100px]"
              />

              <Button
                size="icon"
                variant="ghost"
                onClick={() => setOpenDesc(true)}
              >
                <Pencil size={16} />
              </Button>

              <Button size="icon" variant="ghost">
                <Trash2 className="text-red-500" size={16} />
              </Button>
            </div>
          ))}
        </div>
      </div>

      <CreateCourseDescriptionPopup
        open={openDesc}
        onOpenChange={setOpenDesc}
      />
    </>
  );
}
