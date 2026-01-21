import { Card, CardContent } from "@/components/ui/card";
import clsx from "clsx";

export default function StatCard({
  title,
  value,
  gradient,
}: {
  title: string;
  value: string;
  gradient: string;
}) {
  return (
    <Card
      className={clsx(
        "relative overflow-hidden",
        "border-0 text-white",
        "shadow-sm hover:shadow-md transition",
        gradient,
      )}
    >
      {/* GLASS OVERLAY */}
      <div className="absolute inset-0 bg-black/10 dark:bg-black/20" />

      <CardContent className="relative p-6">
        <p className="text-sm opacity-90">{title}</p>
        <h2 className="mt-1 text-3xl font-bold tracking-tight">{value}</h2>
      </CardContent>
    </Card>
  );
}
