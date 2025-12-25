import Button from "../../components/common/Button";
import type { SleepRecord } from "../../types/record";

type Props = {
  activeSleep: SleepRecord | null;
  setActiveSleep: (r: SleepRecord | null) => void;
};

export default function RecordSleep({ activeSleep, setActiveSleep }: Props) {
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
    const durationMinutes = Math.floor(
      (endTime.getTime() - activeSleep.startTime.getTime()) / 60000
    );

    setActiveSleep({
      ...activeSleep,
      endTime,
      durationMinutes,
    });
  };
  return (
    <div className="rounded-xl border p-4 space-y-3 mb-10">
      {activeSleep ? (
        <>
          <p className="text-sm text-text-sub">
            Start time :{activeSleep.startTime.toLocaleString()}
          </p>

          {!activeSleep.endTime ? (
            <Button onClick={handleEndSleep}>End Sleep</Button>
          ) : (
            <>
              <p className="text-sm">
                End time : {activeSleep.endTime.toLocaleString()}
              </p>
              <p className="text-sm">
                Duration: {activeSleep.durationMinutes} min
              </p>
            </>
          )}
        </>
      ) : (
        <Button onClick={handleStartSleep}>Start Sleep</Button>
      )}
    </div>
  );
}
