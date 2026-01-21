import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, RefreshCcw, UserPlus, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ModeratorHeader({ onAdd }: { onAdd: () => void }) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      {/* ================= HEADER ================= */}
      <div className="flex items-center gap-3">
        <Button
          onClick={() => router.back()}
          size="icon"
          variant="outline"
          className="shrink-0"
        >
          <ArrowLeft size={16} />
        </Button>

        <div>
          <h1 className="text-base sm:text-lg font-semibold">
            Moderator Management
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Manage organization moderators and permissions
          </p>
        </div>
      </div>

      {/* ================= ACTIONS ================= */}
      <div className="flex flex-col sm:flex-row gap-2 sm:items-center w-full lg:w-auto">
        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search
            className="absolute left-3 top-2.5 text-muted-foreground"
            size={16}
          />
          <Input placeholder="Search moderators..." className="pl-9 w-full bg-card" />
        </div>

        {/* Buttons */}
        <div className="flex gap-2 flex-wrap sm:flex-nowrap">
          <Button className="gap-2 bg-white text-black shadow-lg shadow-white-500/50 hover:bg-white">
            <RefreshCcw size={16} />
            Refresh
          </Button>

          <Button
            onClick={onAdd}
            className="gap-2 bg-primary text-white shadow-lg shadow-cyan-500/50"
          >
            <UserPlus size={16} />
            Add Moderator
          </Button>
        </div>
      </div>
    </div>
  );
}
