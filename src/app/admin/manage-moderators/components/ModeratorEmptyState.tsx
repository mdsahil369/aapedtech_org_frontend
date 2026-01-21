import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

export default function ModeratorEmptyState({ onAdd }: { onAdd: () => void }) {
  return (
    <div className="bg-card rounded-sm shadow-aap border border-border p-10 flex flex-col items-center gap-4">
      <UserPlus size={32} className="text-muted-foreground" />

      <p className="text-sm text-muted-foreground">No moderators found</p>

      <Button
        onClick={onAdd}
        className="bg-primary text-white shadow-lg shadow-cyan-500/50"
      >
        Add First Moderator
      </Button>
    </div>
  );
}
