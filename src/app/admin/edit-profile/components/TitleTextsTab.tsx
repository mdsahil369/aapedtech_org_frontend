"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const fields = [
  "course_title",
  "video_title",
  "success_story_title",
  "review_title",
  "about_us_title",
];

export default function TitleTextsTab() {
  return (
    <Card className="rounded-sm bg-card shadow-aap p-5 space-y-4">
      <div className="grid grid-cols-2 bg-muted px-4 py-2 font-semibold">
        <span>Field</span>
        <span>Value</span>
      </div>

      {fields.map((f) => (
        <div key={f} className="grid grid-cols-2 gap-4 items-center">
          <span className="text-sm">{f}</span>
          <Input />
        </div>
      ))}

      <div className="flex justify-end">
        <Button>Save</Button>
      </div>
    </Card>
  );
}
