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
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface UploadCoverVideoDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function UploadCoverVideoDialog({
  open,
  onClose,
}: UploadCoverVideoDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-sm bg-muted">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Upload Cover Video
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Select Category */}
          <div className="space-y-1">
            <label className="text-sm">Select Category</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="video">Video</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Title */}
          <div className="space-y-1">
            <label className="text-sm">Title</label>
            <Input placeholder="Enter Title" />
          </div>

          {/* Video URL */}
          <div className="space-y-1">
            <label className="text-sm">Video URL</label>
            <Input placeholder="Enter video URL" />
          </div>

          {/* Link Type */}
          <div className="space-y-1">
            <label className="text-sm">Link Type</label>
            <Select defaultValue="youtube">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="youtube">Youtube</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Serial ID */}
          <div className="space-y-1">
            <label className="text-sm">Serial ID</label>
            <Input defaultValue="1" />
          </div>
        </div>

        <DialogFooter className="mt-6 flex gap-3 justify-end">
          <Button variant="ghost" className="text-red-600 hover:text-red hover:bg-red-100" onClick={onClose}>
            Close
          </Button>
          <Button className="bg-primary text-white shadow-lg shadow-cyan-500/50">
            Upload Video
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
