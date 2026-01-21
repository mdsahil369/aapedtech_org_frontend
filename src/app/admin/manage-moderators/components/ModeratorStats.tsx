import { ShieldCheck, Users, UserX, Boxes } from "lucide-react";

const stats = [
  {
    label: "Active Moderators",
    value: 0,
    icon: ShieldCheck,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    label: "Total Moderators",
    value: 0,
    icon: Users,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    label: "Inactive",
    value: 0,
    icon: UserX,
    gradient: "from-sky-500 to-cyan-500",
  },
  {
    label: "Available Modules",
    value: 16,
    icon: Boxes,
    gradient: "from-orange-400 to-yellow-400",
  },
];

export default function ModeratorStats() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.label}
            className={`rounded-sm p-5 text-white bg-gradient-to-r ${item.gradient}
              shadow-aap`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">{item.label}</p>
                <h2 className="text-2xl font-semibold">{item.value}</h2>
              </div>
              <Icon size={28} className="opacity-80" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
