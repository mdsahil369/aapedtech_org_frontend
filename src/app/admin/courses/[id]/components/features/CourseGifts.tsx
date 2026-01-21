"use client";

import { Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import AddCourseGiftPopup from "./(components)/AddCourseGiftPopup";

export default function CourseGifts() {
  const [openGift, setOpenGift] = useState(false);

  return (
    <>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Course Gifts</h3>

        <div className="rounded-sm mb-2 border border-border p-6 text-center">
          <Gift className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
          <p className="text-sm">No gifts added yet</p>
          <p className="text-xs text-muted-foreground mb-4">
            Add gifts that students will receive with this course
          </p>

          <Button
            className="bg-primary text-white shadow-lg shadow-cyan-500/50"
            onClick={() => setOpenGift(true)}
          >
            Add Gift
          </Button>
        </div>
      </div>

      <AddCourseGiftPopup open={openGift} onOpenChange={setOpenGift} />
    </>
  );
}
