"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

import UploadCoverVideoDialog from "./video/UploadCoverVideoDialog";
import AddVideoCategoryDialog from "./video/AddVideoCategoryDialog";

export default function VideoTab() {
  const [openVideo, setOpenVideo] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);

  return (
    <div className="space-y-8">
      {/* ================= VIDEO CATEGORIES ================= */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h3 className="text-lg font-semibold">Video Categories</h3>

        <Button
          className="bg-primary text-white shadow-lg shadow-cyan-500/50"
          onClick={() => setOpenCategory(true)}
        >
          Add Category
        </Button>
      </div>

      <Card className="rounded-sm bg-card shadow-aap p-4">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-3 text-left">Category Name</th>
                <th className="px-4 py-3 text-left">Serial</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                {/* CATEGORY NAME CLICK = EDIT */}
                <td
                  onClick={() => setOpenCategory(true)}
                  className="px-4 py-3 text-primary cursor-pointer"
                >
                  Video
                </td>

                <td className="px-4 py-3">1</td>

                <td className="px-4 py-3 flex gap-4">
                  {/* EDIT */}
                  <ActionIcon
                    label="Edit category"
                    color="text-orange-500"
                    onClick={() => setOpenCategory(true)}
                  >
                    <Pencil size={16} />
                  </ActionIcon>

                  {/* DELETE */}
                  <ActionIcon label="Delete category" color="text-destructive">
                    <Trash2 size={16} />
                  </ActionIcon>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      {/* ================= COVER VIDEOS ================= */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h3 className="text-lg font-semibold">Cover Videos</h3>

        <Button
          className="bg-primary text-white shadow-lg shadow-cyan-500/50"
          onClick={() => setOpenVideo(true)}
        >
          Upload Cover Video
        </Button>
      </div>

      <Card className="rounded-sm bg-card shadow-aap p-4">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-3 text-left">Title</th>
                <th className="px-4 py-3 text-left">URL</th>
                <th className="px-4 py-3 text-left">Serial</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="px-4 py-3">Python Course</td>

                <td className="px-4 py-3 text-primary break-all">
                  https://www.youtube.com/watch?v=K5KVEU3aaeQ
                </td>

                <td className="px-4 py-3">1</td>

                <td className="px-4 py-3 flex gap-4">
                  {/* EDIT VIDEO */}
                  <ActionIcon
                    label="Edit video"
                    color="text-orange-500"
                    onClick={() => setOpenVideo(true)}
                  >
                    <Pencil size={16} />
                  </ActionIcon>

                  {/* DELETE VIDEO */}
                  <ActionIcon label="Delete video" color="text-destructive">
                    <Trash2 size={16} />
                  </ActionIcon>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      {/* ================= POPUPS ================= */}
      <UploadCoverVideoDialog
        open={openVideo}
        onClose={() => setOpenVideo(false)}
      />

      <AddVideoCategoryDialog
        open={openCategory}
        onClose={() => setOpenCategory(false)}
      />
    </div>
  );
}

/* ================= REUSABLE ACTION ICON ================= */

function ActionIcon({
  children,
  label,
  color,
  onClick,
}: {
  children: React.ReactNode;
  label: string;
  color: string;
  onClick?: () => void;
}) {
  return (
    <div className="relative group">
      <button onClick={onClick} className={`${color} transition`}>
        {children}
      </button>

      {/* TOOLTIP */}
      <div
        className="
          pointer-events-none
          absolute -top-9 left-1/2 -translate-x-1/2
          whitespace-nowrap
          rounded-full
          bg-pink-500
          px-3 py-1
          text-xs text-white
          opacity-0
          group-hover:opacity-100
          transition
        "
      >
        {label}
      </div>
    </div>
  );
}
