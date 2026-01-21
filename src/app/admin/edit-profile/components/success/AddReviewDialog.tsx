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

export default function AddReviewDialog({ open, onClose }: any) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-sm bg-muted">
        <DialogHeader>
          <DialogTitle>Add Review</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <label>Title</label>
          <Input />
          <label>Subtitle</label>
          <Input />
          <label>Image</label>
          <Input type="file" />
          <label>Review</label>
          <Textarea />
          <label>Star</label>
          <Input />
          <label>Serial ID</label>
          <Input />
        </div>

        <DialogFooter>
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
