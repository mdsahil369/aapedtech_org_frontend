"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Upload } from "lucide-react";

import UploadCoverPhotoPopup from "./cover/UploadCoverPhotoPopup";
import UploadServicePointPopup from "./cover/UploadServicePointPopup";

const coverImages = [
  { id: 5, serial: 5 },
  { id: 4, serial: 4 },
  { id: 3, serial: 3 },
  { id: 2, serial: 2 },
  { id: 1, serial: 1 },
];

export default function CoverTab() {
  const [openCover, setOpenCover] = useState(false);
  const [openServicePoint, setOpenServicePoint] = useState(false);

  return (
    <>
      <div className="space-y-6">
        {/* ================= COVER IMAGES ================= */}
        <Card className="rounded-sm bg-card border-transparent shadow-aap p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-foreground">Cover Images</h3>

            <Button
              className="bg-primary text-white shadow-lg shadow-cyan-500/50"
              onClick={() => setOpenCover(true)}
            >
              <Upload size={16} className="mr-1" />
              Upload Cover Photo
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-sm">
              <thead>
                <tr className="bg-muted border-b border-border">
                  {["Image", "Serial", "URL", "Actions"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {coverImages.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-border last:border-none"
                  >
                    <td className="px-4 py-3">
                      <div className="h-16 w-24 rounded bg-muted" />
                    </td>

                    <td className="px-4 py-3">{item.serial}</td>

                    <td className="px-4 py-3 text-primary">
                      https://varsitysquadbd.com/course/vapfinal
                    </td>

                    <td className="px-4 py-3">
                      <button className="text-destructive">
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* ================= MOTTO TITLE ================= */}
        <Card className="rounded-sm bg-card border-transparent shadow-aap p-5 space-y-3">
          <h3 className="font-semibold text-foreground">Motto Title</h3>

          <div className="flex gap-3">
            <Input defaultValue="বিশ্ববিদ্যালয় স্বপ্ন পূরণের ডিজিটাল প্ল্যাটফর্ম" />
            <Button className="bg-primary text-white shadow-lg shadow-cyan-500/50">
              Save
            </Button>
          </div>
        </Card>

        {/* ================= ORGANIZATION IMAGE ================= */}
        <Card className="rounded-sm bg-card border-transparent shadow-aap p-5 space-y-4">
          <h3 className="font-semibold text-foreground">Organization Image</h3>

          {["Logo", "Login Cover", "Register Cover"].map((item) => (
            <div key={item} className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded bg-muted" />
                <span className="text-sm">{item}</span>
              </div>

              <div className="flex items-center gap-2">
                <Input type="file" />
                <Button
                  className="bg-primary text-white shadow-lg shadow-cyan-500/50"
                  size="sm"
                >
                  Save
                </Button>
              </div>
            </div>
          ))}
        </Card>

        {/* ================= SERVICE POINT ================= */}
        <Card className="rounded-sm bg-card border-transparent shadow-aap p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-foreground">Service Point</h3>

            <Button
              className="bg-primary text-white shadow-lg shadow-cyan-500/50"
              onClick={() => setOpenServicePoint(true)}
            >
              Upload Service Point
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-sm">
              <thead>
                <tr className="bg-muted border-b border-border">
                  {["Icon", "Title", "Link", "Serial", "Actions"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-8 text-center text-muted-foreground"
                  >
                    No service points added.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* ================= POPUPS ================= */}
      <UploadCoverPhotoPopup
        open={openCover}
        onOpenChange={setOpenCover}
      />

      <UploadServicePointPopup
        open={openServicePoint}
        onOpenChange={setOpenServicePoint}
      />
    </>
  );
}
