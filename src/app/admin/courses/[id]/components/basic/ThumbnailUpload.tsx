"use client";

import { ImagePlus } from "lucide-react";

export default function ThumbnailUpload() {
  return (
    <div className="space-y-2">
      <p className="text-sm font-medium">
        Course Thumbnail
      </p>

      <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-border p-6 text-center hover:bg-muted/50 transition cursor-pointer">
        <ImagePlus className="h-8 w-8 text-muted-foreground mb-2" />
        <p className="text-sm">
          Upload course thumbnail
        </p>
        <p className="text-xs text-muted-foreground">
          PNG / JPG • Recommended size 1200×675
        </p>
      </div>
    </div>
  );
}
