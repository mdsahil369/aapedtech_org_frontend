"use client";

import { Textarea } from "@/components/ui/textarea";

export default function DescriptionEditor({
  title,
  defaultValue,
}: {
  title: string;
  defaultValue: string;
}) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-medium">
        {title}
      </p>

      <Textarea
        rows={5}
        defaultValue={defaultValue}
        placeholder={`Write ${title.toLowerCase()} here...`}
      />
    </div>
  );
}
