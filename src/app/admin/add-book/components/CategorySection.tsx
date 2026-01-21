"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function CategorySection({ categories }: { categories: any[] }) {
  const [categoryName, setCategoryName] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-lg">Categories</h2>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogOverlay className="bg-black/40" />
          <DialogTrigger asChild>
            <Button className="bg-primary text-white shadow-lg shadow-cyan-500/50">
              Add New Category
            </Button>
          </DialogTrigger>

          {/* Popup */}
          <DialogContent className="sm:max-w-md bg-muted rounded-sm">
            <DialogHeader>
              <DialogTitle>Create Category</DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              <Input
                placeholder="Enter category name"
                className="rounded-sm"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />

              <div className="flex justify-end gap-2">
                {/* Close Button */}
                <Button variant="ghost" className="text-red-600 hover:text-red hover:bg-red-100" onClick={() => setOpen(false)}>
                  Close
                </Button>

                <Button className="bg-primary text-white shadow-lg shadow-cyan-500/50">
                  Create
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Categories List / Empty */}
      {!categories.length ? (
        <p className="text-sm text-muted-foreground">
          No categories found. Create your first category.
        </p>
      ) : (
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span
              key={cat.id}
              className="rounded-md bg-muted px-3 py-1 text-sm"
            >
              {cat.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
