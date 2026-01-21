"use client";

import { useRouter } from "next/navigation";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import CategorySection from "./components/CategorySection";
import AddBookForm from "./components/AddBookForm";
import BooksEmptyState from "./components/BooksEmptyState";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function AddBookPage() {
  const router = useRouter();
  // Server-side data fetch (example)
  const categories: any[] = []; // await getCategories()

  return (
    <div className="space-y-8 p-4 md:p-6 bg-muted">
      {/* ================= HEADER ================= */}
      <div className="flex items-center gap-3">
        <Button onClick={() => router.back()} size="icon" variant="outline">
          <ArrowLeft size={16} />
        </Button>
        <div>
          <h1 className="text-lg sm:text-xl font-semibold">
            Book Store Management
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Create categories and manage books for your store
          </p>
        </div>
      </div>

      {/* Categories */}
      <Card className="rounded-sm border-transparent shadow-aap bg-card">
        <CardHeader className="flex flex-row items-center justify-between"></CardHeader>
        <CardContent>
          <CategorySection categories={categories} />
        </CardContent>
      </Card>

      {/* Add Book */}
      <Card className="rounded-sm border-transparent shadow-aap bg-card">
        <CardHeader>
          <CardTitle>Add New Book</CardTitle>
        </CardHeader>
        <CardContent>
          <AddBookForm categories={categories} />
        </CardContent>
      </Card>

      {/* Book List Empty */}
      <Card className="rounded-sm border-transparent shadow-aap bg-card">
        <CardHeader className="flex items-center justify-between">
          <CardTitle>Books List</CardTitle>
          <span className="text-sm text-muted-foreground">Total: 0 books</span>
        </CardHeader>
        <CardContent>
          <BooksEmptyState />
        </CardContent>
      </Card>
    </div>
  );
}
