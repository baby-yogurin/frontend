export type RecordType = "sleep" | "feeding" | "nappy";

export interface BaseRecord {
  id: string;
  type: RecordType;
  createdAt: Date;
}

export interface SleepRecord extends BaseRecord {
  type: "sleep";
  startTime: Date;
  endTime?: Date; //undefined while sleeping
  durationMinutes: number;
}
