import { useState } from "react";
import type { SleepRecord } from "../../types/record";
import RecordSleep from "./RecordSleep";
import ManualSleep from "./ManualSleep";
import Button from "../../components/common/Button";

export default function SleepPage() {
  const [activeSleep, setActiveSleep] = useState<SleepRecord | null>(null);
  const [manualStart, setManualStart] = useState<string>("");
  const [manualEnd, setManualEnd] = useState<string>("");
  const [records, setRecords] = useState<SleepRecord[]>([]);

  const handleSave = () => {
    let record: SleepRecord | null = null;

    if (activeSleep && activeSleep.endTime) {
      record = activeSleep;
      setActiveSleep(null);
    }

    if (manualStart && manualEnd) {
      const startTime = new Date(manualStart);
      const endTime = new Date(manualEnd);
      const durationMinutes = Math.floor(
        (endTime.getTime() - startTime.getTime()) / 60000
      );

      record = {
        id: crypto.randomUUID(),
        type: "sleep",
        createdAt: new Date(),
        startTime,
        endTime,
        durationMinutes,
      };

      setManualStart("");
      setManualEnd("");
    }

    if (!record) return;

    setRecords((prev) => [...prev, record]);
  };
  return (
    <>
      <div className="p-4">
        <h1 className="text-lg font-semibold mb-4">Sleep</h1>
        <RecordSleep
          activeSleep={activeSleep}
          setActiveSleep={setActiveSleep}
        />
        <ManualSleep
          start={manualStart}
          end={manualEnd}
          setStart={setManualStart}
          setEnd={setManualEnd}
        />

        <div>
          <Button onClick={handleSave} variant="feeding">
            Save
          </Button>
        </div>
      </div>
    </>
  );
}
