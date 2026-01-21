"use client";

import UpdateUserPopup from "./UpdateUserPopup";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SquarePen, Download } from "lucide-react";

const ROWS_PER_PAGE = 5;

export default function DashboardTable() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [openPopup, setOpenPopup] = useState(false);

  const filteredData = useMemo(() => {
    const q = search.toLowerCase();
    return mockData.filter((item) =>
      Object.values(item).some((v) =>
        String(v ?? "")
          .toLowerCase()
          .includes(q),
      ),
    );
  }, [search]);

  const totalPages = Math.ceil(filteredData.length / ROWS_PER_PAGE);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * ROWS_PER_PAGE;
    return filteredData.slice(start, start + ROWS_PER_PAGE);
  }, [filteredData, page]);

  return (
    <div className="bg-card rounded-sm border-transparent shadow-aap p-5 space-y-5">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
        <Input
          placeholder="Search student..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="lg:w-64"
        />

        <div className="flex flex-wrap gap-2">
          <Button className="bg-primary text-white shadow-lg shadow-cyan-500/50">
            <Download size={16} className="mr-0" />
            Download
          </Button>
          <Button className="bg-green-600 text-white shadow-lg shadow-green-500/50 hover:bg-green-700">
            <Download size={16} className="mr-0" />
            Enrolled
          </Button>
          <Button className="bg-orange-500 text-white shadow-lg shadow-orange-500/50 hover:bg-orange-600">
            <Download size={16} className="mr-0" />
            Unenrolled
          </Button>
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1100px] text-[12px]">
          <thead>
            <tr className="bg-muted">
              {[
                "Roll",
                "Name",
                "Number",
                "Role",
                "Institution",
                "Batch",
                "Gender",
                "Guardian",
                "Course",
                "Address",
                "Joined",
                "Action",
              ].map((h) => (
                <th
                  key={h}
                  className="px-3 py-3 text-left font-semibold text-muted-foreground"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((item) => (
              <tr
                key={item.roll + item.joined}
                className="border-b border-border last:border-none hover:bg-muted/50"
              >
                <td className="px-3 py-3">{item.roll}</td>
                <td className="px-3 py-3 font-medium">{item.name}</td>
                <td className="px-3 py-3">{item.number}</td>
                <td className="px-3 py-3">{item.role}</td>
                <td className="px-3 py-3 truncate max-w-[180px]">
                  {item.institution ?? "—"}
                </td>
                <td className="px-3 py-3">{item.batch}</td>
                <td className="px-3 py-3">{item.gender}</td>
                <td className="px-3 py-3">{item.guardian}</td>
                <td className="px-3 py-3">{item.course ?? "—"}</td>
                <td className="px-3 py-3">{item.address ?? "—"}</td>
                <td className="px-3 py-3 whitespace-nowrap">{item.joined}</td>

                {/* ACTION */}
                <td className="px-3 py-3 text-center">
                  <button
                    onClick={() => setOpenPopup(true)}
                    className="cursor-pointer text-primary hover:opacity-80"
                  >
                    <SquarePen size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Prev
          </Button>

          <span className="text-sm text-muted-foreground">
            Page {page} of {totalPages}
          </span>

          <Button
            variant="outline"
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </Button>
        </div>
      )}

      <UpdateUserPopup open={openPopup} onOpenChange={setOpenPopup} />
    </div>
  );
}

/* ======================
   MOCK DATA (UNCHANGED)
====================== */
const mockData = [
  {
    roll: "SQUAD08710",
    name: "Salman",
    number: "01817837564",
    role: "Student",
    institution: "CANTONMENT PUBLIC SCHOOL AND COLLEGE",
    batch: "HSC-2024",
    gender: "Male",
    guardian: "01817837564",
    course: null,
    address: null,
    joined: "07/01/2026 12:34",
  },
  {
    roll: "SQUAD08710",
    name: "Salman",
    number: "01817837564",
    role: "Student",
    institution: "CANTONMENT PUBLIC SCHOOL AND COLLEGE",
    batch: "HSC-2024",
    gender: "Male",
    guardian: "01817837564",
    course: null,
    address: null,
    joined: "07/01/2026 12:34",
  },
  {
    roll: "SQUAD08709",
    name: "Md Najim Hassan Nirob",
    number: "01312176340",
    role: "Student",
    institution: "BOGRA COLLEGE",
    batch: "HSC-2025",
    gender: "Male",
    guardian: "01305143781",
    course: "varsity-one-shot",
    address: null,
    joined: "07/01/2026 12:28",
  },
  {
    roll: "SQUAD08708",
    name: "Ibrahim",
    number: "01890132000",
    role: "Student",
    institution: "MIRPUR UNIVERSITY COLLEGE",
    batch: "HSC-2024",
    gender: "Male",
    guardian: "01890132000",
    course: "varsity-one-shot",
    address: null,
    joined: "07/01/2026 11:46",
  },
  {
    roll: "SQUAD08707",
    name: "Md Atik Hasan",
    number: "01325824455",
    role: "Student",
    institution: null,
    batch: "HSC-2024",
    gender: "Male",
    guardian: "1401381639",
    course: null,
    address: null,
    joined: "07/01/2026 10:47",
  },
  {
    roll: "SQUAD08706",
    name: "Priyanka",
    number: "01610775230",
    role: "Student",
    institution: null,
    batch: "HSC-2025",
    gender: "Female",
    guardian: "01610775230",
    course: "varsity-one-shot",
    address: null,
    joined: "07/01/2026 08:41",
  },
];
