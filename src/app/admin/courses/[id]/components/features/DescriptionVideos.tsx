"use client";

import { Plus, Trash2, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import AddDescriptionVideoPopup from "./(components)/AddDescriptionVideoPopup";

const videos = [
  {
    id: 1,
    title: "Course Overview",
    url: "https://youtube.com/watch?v=overview",
    serial: 1,
  },
];

export default function DescriptionVideos() {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold">Description Videos</h3>
          <Button
            size="sm"
            className="bg-primary text-white shadow-lg shadow-cyan-500/50"
            onClick={() => setOpenVideo(true)}
          >
            <Plus size={14} />
            Add Video
          </Button>
        </div>

        <div className="space-y-3">
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex flex-col gap-3 rounded-sm mb-2 border border-border p-4"
            >
              <Input defaultValue={video.title} />
              <Input defaultValue={video.url} />

              <div className="flex items-center gap-3">
                <Input
                  defaultValue={video.serial}
                  className="max-w-[120px]"
                />

                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setOpenVideo(true)}
                >
                  <Pencil size={16} />
                </Button>

                <Button size="icon" variant="ghost">
                  <Trash2 className="text-red-500" size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AddDescriptionVideoPopup
        open={openVideo}
        onOpenChange={setOpenVideo}
      />
    </>
  );
}
