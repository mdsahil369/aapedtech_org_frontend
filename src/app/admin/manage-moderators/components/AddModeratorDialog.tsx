"use client";

import { useState } from "react";
import { UserPlus, User, ChevronsUpDown, Check } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Checkbox } from "@/components/ui/checkbox";

/* ===== TYPES ===== */
type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

/* ===== USERS (mock) ===== */
const users = [
  { id: "1", name: "Abir", phone: "01760930234" },
  { id: "2", name: "Salman", phone: "01817837564" },
  { id: "3", name: "Md Najim Hassan Nirob", phone: "01312176340" },
  { id: "4", name: "Ibrahim", phone: "01890132000" },
  { id: "5", name: "Md Atik Hasan", phone: "01325824455" },
];

/* ===== MODULES ===== */
const modules = [
  { title: "Courses", desc: "Manage courses and course content", color: "text-blue-600" },
  { title: "Books", desc: "Manage bookstore and book inventory", color: "text-green-600" },
  { title: "Form", desc: "Access and manage forms", color: "text-slate-700 dark:text-slate-300" },
  { title: "SMS History", desc: "View SMS sending history", color: "text-purple-600" },
  { title: "Pre-Booking", desc: "Manage pre-booking system", color: "text-slate-700 dark:text-slate-300" },
  { title: "Mentor Activity", desc: "Monitor mentor activities", color: "text-blue-600" },
  { title: "Classes", desc: "Manage classes and schedules", color: "text-red-600" },
  { title: "Exams", desc: "Create and manage exams", color: "text-red-600" },
  { title: "Edit Profile", desc: "Edit organization profile settings", color: "text-slate-700 dark:text-slate-300" },
  { title: "Admission News", desc: "Manage admission related news", color: "text-green-600" },
  { title: "Add Routine", desc: "Create and manage routines", color: "text-blue-600" },
  { title: "Notifications", desc: "Send system notifications", color: "text-blue-600" },
  { title: "Add Result", desc: "Manage exam results", color: "text-green-600" },
  { title: "Order Management", desc: "Manage orders and transactions", color: "text-slate-700 dark:text-slate-300" },
];

export default function AddModeratorDialog({ open, onOpenChange }: Props) {
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [userOpen, setUserOpen] = useState(false);
  const [userId, setUserId] = useState("");

  const selectedUser = users.find((u) => u.id === userId);

  const toggleModule = (title: string) => {
    setSelectedModules((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title],
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="bg-black/40 backdrop-blur-sm" />

      <DialogContent className="w-[95vw] sm:w-full max-w-7xl h-[90vh] p-0 rounded-sm overflow-hidden bg-card border border-border flex flex-col">
        {/* ===== HEADER ===== */}
        <DialogHeader className="px-4 sm:px-6 py-4 border-b border-border flex flex-row items-center justify-between">
          <DialogTitle className="flex items-center gap-2 text-sm sm:text-base font-semibold">
            <UserPlus size={18} />
            Add New Moderator
          </DialogTitle>
        </DialogHeader>

        {/* ===== BODY ===== */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-5 space-y-8">
          {/* USER SELECT */}
          <div className="space-y-1">
            <label className="text-sm font-medium">
              Select User <span className="text-red-500">*</span>
            </label>

            <Popover open={userOpen} onOpenChange={setUserOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  className="w-full h-11 sm:h-12 justify-between rounded-sm bg-muted/50 font-normal"
                >
                  {selectedUser ? (
                    <span className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      {selectedUser.name}
                    </span>
                  ) : (
                    <span className="text-muted-foreground">
                      Search and select a user...
                    </span>
                  )}
                  <ChevronsUpDown className="h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>

              <PopoverContent
                align="start"
                className="w-[--radix-popover-trigger-width] p-0"
              >
                <Command>
                  <CommandInput placeholder="Search..." className="h-11" />
                  <CommandEmpty>No user found.</CommandEmpty>

                  <CommandGroup>
                    {users.map((user) => (
                      <CommandItem
                        key={user.id}
                        value={`${user.name} ${user.phone}`}
                        className="py-3"
                        onSelect={() => {
                          setUserId(user.id);
                          setUserOpen(false);
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <User className="h-4 w-4 text-primary" />
                          </div>

                          <div className="flex flex-col">
                            <span className="text-sm">{user.name}</span>
                            <span className="text-xs text-muted-foreground">
                              {user.phone}
                            </span>
                          </div>
                        </div>

                        <Check
                          className={`ml-auto h-4 w-4 ${
                            userId === user.id ? "opacity-100" : "opacity-0"
                          }`}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          {/* MODULE ACCESS */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">
                Module Access Permissions
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {modules.map((m) => {
                const isActive = selectedModules.includes(m.title);

                return (
                  <label
                    key={m.title}
                    className={`flex gap-3 rounded-sm border shadow-aap p-4 cursor-pointer transition-all
                      ${
                        isActive
                          ? "bg-primary/10 border-primary"
                          : "hover:bg-muted/40"
                      }
                    `}
                  >
                    <Checkbox
                      checked={isActive}
                      onCheckedChange={() => toggleModule(m.title)}
                    />
                    <div className="space-y-1">
                      <p className={`text-sm font-medium ${m.color}`}>
                        {m.title}
                      </p>
                      <p className="text-xs text-muted-foreground">{m.desc}</p>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        {/* ===== FOOTER ===== */}
        <div className="px-4 sm:px-6 py-4 border-t border-border flex justify-end gap-3 sticky bottom-0 bg-card">
          <Button
            variant="ghost"
            className="text-red-600 hover:text-red hover:bg-red-100"
            onClick={() => onOpenChange(false)}
          >
            Close
          </Button>
          <Button className="bg-primary text-white shadow-lg shadow-cyan-500/50">
            Add Moderator
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
