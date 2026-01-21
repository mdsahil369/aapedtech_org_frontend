import { BookOpen } from "lucide-react";

export default function BooksEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-14 text-center">
      <BookOpen className="h-10 w-10 text-muted-foreground mb-3" />
      <p className="font-medium">No books found</p>
      <p className="text-sm text-muted-foreground">
        Get started by creating your first book above.
      </p>
    </div>
  );
}
