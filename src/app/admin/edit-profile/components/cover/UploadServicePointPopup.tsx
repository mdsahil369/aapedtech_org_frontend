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

export default function UploadServicePointPopup({
  open,
  onOpenChange,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="bg-black/40" />

      <DialogContent className="rounded-md bg-card border border-border p-6">
        <DialogHeader>
          <DialogTitle className="text-base font-semibold">
            Upload Service Point
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Icon */}
          <div className="space-y-1">
            <p className="text-sm">Choose an icon</p>
            <Input type="file" />
          </div>

          {/* Title */}
          <div className="space-y-1">
            <p className="text-sm">Title</p>
            <Input placeholder="Enter a title" />
          </div>

          {/* Link */}
          <div className="space-y-1">
            <p className="text-sm">link</p>
            <Input placeholder="Enter a link" />
          </div>

          {/* Serial */}
          <div className="space-y-1">
            <p className="text-sm">Serial ID</p>
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
              Upload
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
