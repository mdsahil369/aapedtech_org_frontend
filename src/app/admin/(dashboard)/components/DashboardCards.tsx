import { Card } from "@/components/ui/card";
import { Users, UserCheck, UserX } from "lucide-react";

const cards = [
  {
    title: "Total Students",
    value: "8,751",
    icon: Users,
    bg: "bg-primary/15",
    iconColor: "text-primary",
  },
  {
    title: "Enrolled",
    value: "6,729",
    icon: UserCheck,
    bg: "bg-green-500/15",
    iconColor: "text-green-500",
  },
  {
    title: "Unenrolled",
    value: "2,022",
    icon: UserX,
    bg: "bg-destructive/15",
    iconColor: "text-destructive",
  },
];

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
      {cards.map((item) => {
        const Icon = item.icon;

        return (
          <Card
            key={item.title}
            className="p-3 sm:p-4 lg:p-5 rounded-sm bg-card border-transparent shadow-aap"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-2">
              {/* Text */}
              <div className="text-center sm:text-left">
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {item.title}
                </p>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground">
                  {item.value}
                </h2>
              </div>

              {/* Icon */}
              <div
                className={`h-9 w-9 sm:h-10 sm:w-10 lg:h-12 lg:w-12 rounded-full flex items-center justify-center ${item.bg}`}
              >
                <Icon className={item.iconColor} size={18} />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
