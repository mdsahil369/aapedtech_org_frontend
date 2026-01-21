"use client";

import { useState } from "react";
import ModeratorHeader from "./components/ModeratorHeader";
import ModeratorStats from "./components/ModeratorStats";
import ModeratorEmptyState from "./components/ModeratorEmptyState";
import AddModeratorDialog from "./components/AddModeratorDialog";

export default function ManageModeratorsPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-muted p-4 md:p-6 space-y-6">
      <ModeratorHeader onAdd={() => setOpen(true)} />
      <ModeratorStats />
      <ModeratorEmptyState onAdd={() => setOpen(true)} />

      <AddModeratorDialog open={open} onOpenChange={setOpen} />
    </div>
  );
}
