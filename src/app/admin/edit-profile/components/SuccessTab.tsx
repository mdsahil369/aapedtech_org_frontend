"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

import AddSuccessStoryImageDialog from "./success/AddSuccessStoryImageDialog";
import AddSuccessStoryDialog from "./success/AddSuccessStoryDialog";
import AddReviewDialog from "./success/AddReviewDialog";

export default function SuccessTab() {
  const [imgOpen, setImgOpen] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);

  return (
    <div className="space-y-10">
      {/* ================= SUCCESS STORY IMAGES ================= */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Success Stories' Images</h3>
        <Button
          onClick={() => setImgOpen(true)}
          className="bg-primary text-white shadow-lg shadow-cyan-500/50"
        >
          Add Success Story Image
        </Button>
      </div>

      <Card className="rounded-sm bg-card shadow-aap p-4">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              {["Image", "Serial", "Actions"].map((h) => (
                <th key={h} className="px-4 py-3 text-left">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3">
                <div className="h-10 w-16 bg-muted rounded" />
              </td>
              <td className="px-4 py-3">1</td>
              <td className="px-4 py-3">
                <Trash2 className="text-destructive" size={16} />
              </td>
            </tr>
          </tbody>
        </table>
      </Card>

      {/* ================= SUCCESS STORIES ================= */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Success Stories</h3>
        <Button
          onClick={() => setStoryOpen(true)}
          className="bg-primary text-white shadow-lg shadow-cyan-500/50"
        >
          Add Success Story
        </Button>
      </div>

      <Card className="rounded-sm bg-card shadow-aap p-4">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              {["Image", "Title", "Description", "Serial", "Actions"].map(
                (h) => (
                  <th key={h} className="px-4 py-3 text-left">
                    {h}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3">
                <div className="h-10 w-16 bg-muted rounded" />
              </td>
              <td className="px-4 py-3">success</td>
              <td className="px-4 py-3">story</td>
              <td className="px-4 py-3">1</td>
              <td className="px-4 py-3 flex gap-3">
                <Pencil size={16} className="text-orange-500" />
                <Trash2 size={16} className="text-destructive" />
              </td>
            </tr>
          </tbody>
        </table>
      </Card>

      {/* ================= REVIEWS ================= */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Reviews</h3>
        <Button
          onClick={() => setReviewOpen(true)}
          className="bg-primary text-white shadow-lg shadow-cyan-500/50"
        >
          Add Review
        </Button>
      </div>

      <Card className="rounded-sm bg-card shadow-aap p-4">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              {[
                "Image",
                "Serial",
                "Title",
                "Sub Title",
                "Review",
                "Star",
                "Actions",
              ].map((h) => (
                <th key={h} className="px-4 py-3 text-left">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3">
                <div className="h-10 w-16 bg-muted rounded" />
              </td>
              <td className="px-4 py-3">1</td>
              <td className="px-4 py-3">Review</td>
              <td className="px-4 py-3">Subtitle Review</td>
              <td className="px-4 py-3">Best</td>
              <td className="px-4 py-3">5</td>
              <td className="px-4 py-3 flex gap-3">
                <Pencil size={16} className="text-orange-500" />
                <Trash2 size={16} className="text-destructive" />
              </td>
            </tr>
          </tbody>
        </table>
      </Card>

      {/* ================= POPUPS ================= */}
      <AddSuccessStoryImageDialog
        open={imgOpen}
        onClose={() => setImgOpen(false)}
      />
      <AddSuccessStoryDialog
        open={storyOpen}
        onClose={() => setStoryOpen(false)}
      />
      <AddReviewDialog open={reviewOpen} onClose={() => setReviewOpen(false)} />
    </div>
  );
}
