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

export default function AddInformationDialog({ open, onClose }: any) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl rounded-sm bg-muted">
        <DialogHeader>
          <DialogTitle>Add Information</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input placeholder="Title" />
          <Input placeholder="Link" />
          <Input placeholder="Serial" />
          <Input type="file" />
        </div>

        <DialogFooter className="flex flex-col sm:flex-row sm:justify-end gap-3">
          <Button variant="ghost" className="text-red-600 hover:text-red hover:bg-red-100" onClick={onClose}>
            Close
          </Button>
          <Button className="bg-primary text-white shadow-lg shadow-cyan-500/50">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
