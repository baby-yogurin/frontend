import clsx from "clsx";
import { Droplet, Milk, Moon, type LucideIcon } from "lucide-react";

type ActionType = "sleep" | "feeding" | "nappy";

interface ActionCardProps {
  title: string;
  subtitle: string;
  type: ActionType;
  onClick: () => void;
}

const COLOR_MAP: Record<ActionType, string> = {
  sleep: "bg-sleep",
  feeding: "bg-feeding",
  nappy: "bg-nappy",
};

const ICON_MAP: Record<ActionType, LucideIcon> = {
  sleep: Moon,
  feeding: Milk,
  nappy: Droplet,
};

export default function ActionCard({
  title,
  subtitle,
  type,
  onClick,
}: ActionCardProps) {
  const Icon = ICON_MAP[type];
  return (
    <button
      onClick={onClick}
      className={clsx(
        "w-full rounded-lg p-4 flex justify-between items-center",
        COLOR_MAP[type]
      )}
    >
      <div className="text-left">
        <h3 className="text-base font-semibold text-textMain">{title}</h3>
        <p className="text-sm text-textSub mt-1">{subtitle}</p>
      </div>

      <div className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center">
        <Icon className="text-textSub" size={24} />
      </div>
    </button>
  );
}
