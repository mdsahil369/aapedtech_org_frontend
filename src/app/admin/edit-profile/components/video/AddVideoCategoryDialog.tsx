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

interface AddVideoCategoryDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function AddVideoCategoryDialog({
  open,
  onClose,
}: AddVideoCategoryDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-sm bg-muted">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Add Video Category
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Category Name */}
          <div className="space-y-1">
            <label className="text-sm">Category Name</label>
            <Input />
          </div>

          {/* Serial ID */}
          <div className="space-y-1">
            <label className="text-sm">Serial ID</label>
            <Input />
          </div>
        </div>

        <DialogFooter className="mt-6 flex gap-3 justify-end">
          <Button variant="ghost" className="text-red-600 hover:text-red hover:bg-red-100" onClick={onClose}>
            Close
          </Button>
          <Button className="bg-lime-300 text-black shadow-lg shadow-lime-500/50 hover:bg-lime-400">
            Add Video Category
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
