export type ActivityType = "sleep" | "feeding" | "nappy";

export interface Activity {
  id: string;
  type: ActivityType;
  startTime: string;
  endTime: string;
  duration?: string;
  memo?: string;
}
