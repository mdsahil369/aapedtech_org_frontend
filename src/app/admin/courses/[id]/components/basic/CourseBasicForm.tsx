"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { UploadCloud } from "lucide-react";

export default function CourseBasicForm() {
  return (
    <div className="bg-card space-y-6">
      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Basic</h2>
        <Button className="bg-green-500 text-white shadow-lg shadow-green-500/50 hover:bg-green-600">
          Update
        </Button>
      </div>

      {/* ================= BASIC INFO ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          placeholder="Name *"
          defaultValue="একাডেমিক টেস্ট পেপার মডেল ক্লাস"
        />
        <Input placeholder="Slug" defaultValue="testpaper" />
        <Input placeholder="Batch *" defaultValue="Test" />
        <Input placeholder="Serial" />
        <Input placeholder="Intro Video URL" />
        <Input placeholder="Price" defaultValue="0" />
        <Input placeholder="Discount" defaultValue="0" />
        <Input
          placeholder="Discount End Date"
          defaultValue="01/21/2026, 12:35:11 PM"
        />
        <Input placeholder="Running Day" defaultValue="0" />
        <Input
          placeholder="Redirect Link"
          defaultValue="https://example.com/redirect"
        />
        <Input
          placeholder="Enroll Link"
          defaultValue="https://example.com/enroll"
        />
      </div>

      {/* ================= TOGGLES ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ToggleRow label="Show total Enrollment" />
        <ToggleRow label="Pre-Booking" />
        <ToggleRow label="Highlight" />
        <ToggleRow label="Hide" defaultChecked />
        <ToggleRow label="Form" />
      </div>

      {/* ================= SHORT DESCRIPTION ================= */}
      <div className="space-y-2">
        <p className="text-sm font-medium">Short Description</p>
        <textarea
          rows={3}
          placeholder="Enter your short description"
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* ================= CLEAR BUTTON ================= */}
      <Button className="w-full bg-green-500 text-white shadow-lg shadow-green-500/50 hover:bg-green-600">
        Clear Form Submission
      </Button>

      {/* ================= THUMBNAIL PREVIEW ================= */}
      <div className="space-y-3">
        <img
          src="https://via.placeholder.com/300x180"
          alt="Thumbnail"
          className="rounded-md max-w-xs"
        />

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Upload Thumbnail</p>

          <label
            htmlFor="thumbnail"
            className="flex flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed border-border bg-muted/40 p-8 cursor-pointer hover:bg-muted"
          >
            <UploadCloud className="text-muted-foreground" />
            <p className="text-sm font-medium">Image File</p>
            <p className="text-xs text-muted-foreground">
              Upload or drag & drop your file SVG, PNG, JPG or GIF.
            </p>
            <input
              id="thumbnail"
              type="file"
              accept="image/*"
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* ================= DESCRIPTION ================= */}
      <div className="space-y-2">
        <p className="text-sm font-medium">Description</p>
        <textarea
          rows={4}
          placeholder="Enter course description here"
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* ================= DIRECTION ================= */}
      <div className="space-y-2">
        <p className="text-sm font-medium">Direction</p>
        <textarea
          rows={4}
          placeholder="Enter course direction here"
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
    </div>
  );
}

/* ================= TOGGLE ROW ================= */
function ToggleRow({
  label,
  defaultChecked = false,
}: {
  label: string;
  defaultChecked?: boolean;
}) {
  return (
    <div className="flex items-center justify-between rounded-md border p-3">
      <span className="text-sm">{label}</span>
      <Switch defaultChecked={defaultChecked} />
    </div>
  );
}
