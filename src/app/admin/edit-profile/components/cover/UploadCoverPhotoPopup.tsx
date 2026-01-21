"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function UploadCoverPhotoPopup({
  open,
  onOpenChange,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="bg-black/40" />

      <DialogContent className="rounded-md bg-card border border-border p-6">
        <DialogHeader>
          <DialogTitle className="text-base font-semibold">
            Upload Cover Photo
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Image */}
          <div className="space-y-1">
            <p className="text-sm">Choose an image</p>
            <Input type="file" />
          </div>

          {/* URL */}
          <div className="space-y-1">
            <p className="text-sm">Url</p>
            <Input placeholder="Enter a Url" />
          </div>

          {/* Serial */}
          <div className="space-y-1">
            <p className="text-sm">serial ID</p>
            <Input defaultValue="1" />
          </div>

          {/* Footer */}
          <div className="flex justify-between pt-4">
            <Button
              variant="ghost"
              className="text-red-600 hover:text-red hover:bg-red-100"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button className="bg-primary text-white shadow-lg shadow-cyan-500/50">
              Execute
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
