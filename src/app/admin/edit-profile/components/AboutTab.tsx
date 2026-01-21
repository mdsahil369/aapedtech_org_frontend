"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

import AddAboutUsDialog from "./about/AddAboutUsDialog";
import AddInformationDialog from "./about/AddInformationDialog";

export default function AboutTab() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <div className="space-y-10">
      {/* ================= ABOUT US ================= */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">About Us</h3>
        <Button
          onClick={() => setAboutOpen(true)}
          className="bg-primary text-white shadow-lg shadow-cyan-500/50"
        >
          Add About Us
        </Button>
      </div>

      <Card className="rounded-sm bg-card shadow-aap p-4">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              {["Image", "Title", "Description", "Actions"].map((h) => (
                <th key={h} className="px-4 py-3 text-left">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3">
                <div className="h-10 w-16 bg-muted rounded" />
              </td>
              <td className="px-4 py-3">title</td>
              <td className="px-4 py-3">description</td>
              <td className="px-4 py-3 flex gap-3">
                <Pencil
                  size={16}
                  className="text-orange-500 cursor-pointer"
                  onClick={() => setAboutOpen(true)}
                />
                <Trash2 size={16} className="text-destructive" />
              </td>
            </tr>
          </tbody>
        </table>
      </Card>

      {/* ================= FOOTER ================= */}

      {/* ================= INFORMATION ================= */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Information</h3>
        <Button
          onClick={() => setInfoOpen(true)}
          className="bg-primary text-white shadow-lg shadow-cyan-500/50"
        >
          Add Information
        </Button>
      </div>

      <Card className="rounded-sm bg-card shadow-aap p-4">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              {["Icon", "Title", "Link", "Serial", "Actions"].map((h) => (
                <th key={h} className="px-4 py-3 text-left">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3">
                <div className="h-8 w-8 bg-muted rounded" />
              </td>
              <td className="px-4 py-3">title</td>
              <td className="px-4 py-3 text-primary">link</td>
              <td className="px-4 py-3">1</td>
              <td className="px-4 py-3 flex gap-3">
                <Pencil
                  size={16}
                  className="text-orange-500 cursor-pointer"
                  onClick={() => setInfoOpen(true)}
                />
                <Trash2 size={16} className="text-destructive" />
              </td>
            </tr>
          </tbody>
        </table>
      </Card>

      {/* ================= POPUPS ================= */}
      <AddAboutUsDialog open={aboutOpen} onClose={() => setAboutOpen(false)} />
      <AddInformationDialog
        open={infoOpen}
        onClose={() => setInfoOpen(false)}
      />
    </div>
  );
}
