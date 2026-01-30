import { GiBabyBottle, GiNightSleep } from "react-icons/gi";
import type { ActivityType } from "../../utils/types/activity";
import { TbDiaper } from "react-icons/tb";

type Props = {
  onAdd: (type: ActivityType) => void;
};

const ICON_STYLE =
  "w-16 h-16 p-2 rounded-full flex items-center justify-center text-surface cursor-pointer";

export default function ActivityIcons({ onAdd }: Props) {
  return (
    <div className="flex justify-center gap-12 m-5">
      <GiNightSleep
        onClick={() => onAdd("sleep")}
        className={ICON_STYLE}
        style={{ backgroundColor: "var(--color-sleep)" }}
      />
      <GiBabyBottle
        onClick={() => onAdd("feeding")}
        className={ICON_STYLE}
        style={{ backgroundColor: "var(--color-feeding)" }}
      />
      <TbDiaper
        onClick={() => onAdd("nappy")}
        className={ICON_STYLE}
        style={{ backgroundColor: "var(--color-nappy)" }}
      />
    </div>
  );
}
