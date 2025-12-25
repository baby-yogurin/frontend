import Button from "../../components/common/Button";
import type { SleepRecord } from "../../types/record";

type Props = {
  activeSleep: SleepRecord | null;
  setActiveSleep: (r: SleepRecord | null) => void;
  addSleepRecord: (r: SleepRecord) => void;
};

export default function RecordSleep({
  activeSleep,
  setActiveSleep,
  addSleepRecord,
}: Props) {
  const handleStartSleep = () => {
    const now = new Date();
    const newRecord: SleepRecord = {
      id: crypto.randomUUID(),
      type: "sleep",
      createdAt: now,
      startTime: now,
      durationMinutes: 0,
    };
    setActiveSleep(newRecord);
  };

  const handleEndSleep = () => {
    if (!activeSleep) return;

    const endTime = new Date();
    const duration = Math.floor(
      endTime.getTime() - activeSleep.startTime.getTime() / 60000
    );

    const finishedRecord: SleepRecord = {
      ...activeSleep,
      endTime,
      durationMinutes: duration,
    };
    console.log(endTime, "endtime");
    addSleepRecord(finishedRecord);
    setActiveSleep(null);
  };
  return (
    <div className="rounded-xl border p-4 space-y-3">
      {activeSleep ? (
        <>
          <p className="text-sm text-text-sub">
            Sleeping since{""}
            {activeSleep.startTime.toLocaleString()}{" "}
          </p>
          <Button onClick={handleEndSleep}>End Sleep</Button>
        </>
      ) : (
        <>
          <Button onClick={handleStartSleep}>Start Sleep</Button>
        </>
      )}
    </div>
  );
}
