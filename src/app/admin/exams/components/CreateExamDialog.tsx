"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { UploadCloud } from "lucide-react";

interface CreateExamDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function CreateExamDialog({
  open,
  onClose,
}: CreateExamDialogProps) {
  const [fileName, setFileName] = useState<string>("");

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg rounded-sm bg-muted">
        {/* HEADER */}
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Create Exam
          </DialogTitle>
        </DialogHeader>

        {/* BODY */}
        <div className="space-y-4">
          {/* Exam Name */}
          <Input placeholder="Exam Name" className="h-11" />

          {/* Description */}
          <Textarea
            placeholder="Enter exam description"
            className="min-h-[90px] resize-none"
          />

          {/* Upload */}
          <label className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed bg-muted/40 p-6 text-center cursor-pointer hover:bg-muted transition">
            <UploadCloud className="h-8 w-8 text-muted-foreground" />

            <p className="text-sm font-medium text-foreground">
              Click below to upload exam cover
            </p>

            <p className="text-xs text-muted-foreground">SVG, PNG, JPG</p>

            <div className="mt-2">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
              />
              <span className="text-xs text-muted-foreground">
                {fileName || "Choose File • No file chosen"}
              </span>
            </div>
          </label>
        </div>

        {/* FOOTER */}
        <DialogFooter className="mt-6 flex flex-col-reverse sm:flex-row gap-3 sm:justify-end">
          <Button
            variant="ghost" className="text-red-600 hover:text-red hover:bg-red-100"
            onClick={onClose}
          >
            Close
          </Button>

          <Button className="bg-primary text-white shadow-lg shadow-cyan-500/50">
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
