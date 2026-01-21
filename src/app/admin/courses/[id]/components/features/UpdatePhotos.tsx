"use client";

import { ImagePlus, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import AddUpdatePhotoPopup from "./(components)/AddUpdatePhotoPopup";

export default function UpdatePhotos() {
  const [openPhoto, setOpenPhoto] = useState(false);

  return (
    <>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Update Photos</h3>

        <div
          className="rounded-sm mb-2 border-2 border-dashed border-border p-6 text-center hover:bg-muted/50 transition cursor-pointer"
          onClick={() => setOpenPhoto(true)}
        >
          <ImagePlus className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
          <p className="text-sm">Upload update photos</p>
          <p className="text-xs text-muted-foreground">
            JPG / PNG • Max 5 images
          </p>
        </div>

        <Button
          className="bg-primary text-white shadow-lg shadow-cyan-500/50"
          onClick={() => setOpenPhoto(true)}
        >
          Upload Photos
        </Button>
      </div>

      <AddUpdatePhotoPopup
        open={openPhoto}
        onOpenChange={setOpenPhoto}
      />
    </>
  );
}
