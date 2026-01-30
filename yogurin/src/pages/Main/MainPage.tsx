import { useState } from "react";
import type { Activity, ActivityType } from "../../utils/types/activity";
import ActivityIcons from "./ActivityIcons";
import { v4 as uuid } from "uuid";
import ActivityList from "./ActivityList";

export default function MainPage() {
  const [activities, setActivities] = useState<Activity[]>([]);

  const handleActivity = (type: ActivityType) => {
    const now = new Date().toISOString();

    const newActivity: Activity = {
      id: uuid(),
      type,
      startTime: now,
    };

    setActivities((prev) => [newActivity, ...prev]);
    console.log(activities, "액티비티");
  };

  return (
    <>
      <ActivityIcons onAdd={handleActivity} />
      <ActivityList activities={activities} />
    </>
  );
}
