import { useNavigate } from "react-router-dom";
import type { Activity } from "../../utils/types/activity";
import { GiBabyBottle, GiNightSleep } from "react-icons/gi";
import { TbDiaper } from "react-icons/tb";

type Props = {
  activities: Activity[];
};

const ICON_STYLE_SM = "w-5 h-5 p-0.5 rounded-full text-surface";

const iconMap = {
  sleep: (
    <GiNightSleep
      className={ICON_STYLE_SM}
      style={{ backgroundColor: "var(--color-sleep)" }}
    />
  ),
  feeding: (
    <GiBabyBottle
      className={ICON_STYLE_SM}
      style={{ backgroundColor: "var(--color-feeding)" }}
    />
  ),
  nappy: (
    <TbDiaper
      className={ICON_STYLE_SM}
      style={{ backgroundColor: "var(--color-nappy)" }}
    />
  ),
};

export default function ActivityList({ activities }: Props) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-lightPrimary text-sm px-4 py-1">
        {new Date().toLocaleDateString("en-KR", {
          day: "2-digit",
          month: "short",
          weekday: "short",
        })}
      </div>
      <ul>
        {activities.map((item) => (
          <li
            key={item.id}
            onClick={() => navigate(`/activity/${item.type}/${item.id}`)}
            className="flex items-center justify-between p-3 border-border border-b cursor-poiner"
          >
            <div className="flex items-center gap-3 text-sm">
              <span className="ml-2 text-sm">
                {new Date(item.startTime).toLocaleTimeString("en-KR", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
              <span>{iconMap[item.type]}</span>
              <span className="capitalize">{item.type}</span>
            </div>
            <span className="text-textSub text-sm cursor-pointer mr-5">+</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
