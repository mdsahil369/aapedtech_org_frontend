"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AddAdmissionNewsDialog({ open, onClose }: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg rounded-sm bg-muted">
        <DialogHeader>
          <DialogTitle>Add Admission News</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Input placeholder="Category" />
          <Input placeholder="Short Heading" />

          {/* DESCRIPTION (Rich text placeholder) */}
          <Textarea placeholder="Description" className="min-h-[120px]" />

          {/* COVER IMAGE */}
          <Input type="file" />

          {/* BG COLOR */}
          <Input placeholder="Background Color (e.g. #E0F2FE)" />
        </div>

        <DialogFooter className="flex flex-col sm:flex-row sm:justify-end gap-3">
          <Button
            variant="ghost"
            className="text-red-600 hover:text-red hover:bg-red-100"
            onClick={onClose}
          >
            Close
          </Button>
          <Button className="bg-primary text-white shadow-lg shadow-cyan-500/50">
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
