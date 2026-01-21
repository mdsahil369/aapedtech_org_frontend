"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";

const ROWS_PER_PAGE = 3;

const data = [
  {
    id: 1,
    name: "riyadh",
    number: "01786563606",
    senderNumber: "N/A",
    txnId: "N/A",
    amount: 1000,
    due: 0,
    dueDate: "null",
    payment: "manual",
    promo: "null",
    course: "ভার্সিটি ফাইনাল মডেল টেস্ট (এক কোর্স শুরু)",
    date: "20/01/2026 22:05:35",
    addedBy: "riyadh",
    comment: "N/A",
    status: "Successful",
  },
  {
    id: 2,
    name: "Khadija akter",
    number: "01300213773",
    senderNumber: "N/A",
    txnId: "N/A",
    amount: 0,
    due: 0,
    dueDate: "null",
    payment: "free",
    promo: "null",
    course: "ভার্সিটি ক + গুচ্ছ ওয়ান শট কোর্স (৬০ দিন)",
    date: "20/01/2026 20:43:54",
    addedBy: "N/A",
    comment: "N/A",
    status: "Completed",
  },
  {
    id: 3,
    name: "Zahin Tazwar",
    number: "01633502815",
    senderNumber: "N/A",
    txnId: "N/A",
    amount: 500,
    due: 0,
    dueDate: "null",
    payment: "manual",
    promo: "null",
    course: "ভার্সিটি বিজ্ঞান কোর্স",
    date: "20/01/2026 19:22:32",
    addedBy: "admin",
    comment: "N/A",
    status: "Pending",
  },
  {
    id: 4,
    name: "Zahin Tazwar",
    number: "01633502815",
    senderNumber: "N/A",
    txnId: "N/A",
    amount: 500,
    due: 0,
    dueDate: "null",
    payment: "manual",
    promo: "null",
    course: "ভার্সিটি বিজ্ঞান কোর্স",
    date: "20/01/2026 19:22:32",
    addedBy: "admin",
    comment: "N/A",
    status: "Pending",
  },
  {
    id: 5,
    name: "Zahin Tazwar",
    number: "01633502815",
    senderNumber: "N/A",
    txnId: "N/A",
    amount: 500,
    due: 0,
    dueDate: "null",
    payment: "manual",
    promo: "null",
    course: "ভার্সিটি বিজ্ঞান কোর্স",
    date: "20/01/2026 19:22:32",
    addedBy: "admin",
    comment: "N/A",
    status: "Pending",
  },
];

export default function EnrolledTable() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  /*  LIVE SEARCH (ALL COLUMNS)  */
  const filteredData = useMemo(() => {
    const q = search.toLowerCase();
    return data.filter((item) =>
      Object.values(item).some((v) =>
        String(v ?? "")
          .toLowerCase()
          .includes(q),
      ),
    );
  }, [search]);

  /*  PAGINATION  */
  const totalPages = Math.ceil(filteredData.length / ROWS_PER_PAGE);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * ROWS_PER_PAGE;
    return filteredData.slice(start, start + ROWS_PER_PAGE);
  }, [filteredData, page]);

  return (
    <div className="bg-card shadow-aap rounded-md p-4 space-y-4">
      {/* SEARCH */}
      <Input
        placeholder="Search anything..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        className="max-w-sm"
      />

      {/* TABLE (DESKTOP + MOBILE SAME) */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1400px] text-sm">
          <thead className="bg-muted">
            <tr>
              {[
                "NAME",
                "Number",
                "Sender Number",
                "TXN ID",
                "Amount",
                "Due",
                "Due Date",
                "Payment",
                "Promo",
                "Course",
                "Date",
                "Added by",
                "Comment",
                "Status",
                "Action",
              ].map((h) => (
                <th
                  key={h}
                  className="px-3 py-3 text-left font-medium text-muted-foreground"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((item) => (
              <tr
                key={item.id}
                className="border-b last:border-none hover:bg-muted/50"
              >
                <td className="px-3 py-2 font-medium">{item.name}</td>
                <td className="px-3 py-2">{item.number}</td>
                <td className="px-3 py-2">{item.senderNumber}</td>
                <td className="px-3 py-2">{item.txnId}</td>
                <td className="px-3 py-2">{item.amount}</td>
                <td className="px-3 py-2">{item.due}</td>
                <td className="px-3 py-2">{item.dueDate}</td>
                <td className="px-3 py-2 capitalize">{item.payment}</td>
                <td className="px-3 py-2">{item.promo}</td>
                <td className="px-3 py-2 max-w-[240px] whitespace-pre-line">
                  {item.course}
                </td>
                <td className="px-3 py-2 whitespace-nowrap">{item.date}</td>
                <td className="px-3 py-2">{item.addedBy}</td>
                <td className="px-3 py-2">{item.comment}</td>

                {/* STATUS */}
                <td className="px-3 py-2">
                  <Select defaultValue={item.status}>
                    <SelectTrigger className="w-36 h-8">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                      <SelectItem value="Successful">Successful</SelectItem>
                    </SelectContent>
                  </Select>
                </td>

                {/* ACTION */}
                <td className="px-3 py-2">
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      className="bg-blue-600 text-white shadow-lg shadow-blue-500/50 hover:bg-blue-700"
                    >
                      Invoice
                    </Button>

                    <button
                      className="p-2 rounded-md bg-red-500/10 text-red-600 hover:bg-red-500/20"
                      title="Remove"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {paginatedData.length === 0 && (
              <tr>
                <td
                  colSpan={15}
                  className="text-center py-6 text-muted-foreground"
                >
                  No data found
                </td>
              </tr>
            )}
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
    </div>
  );
}
