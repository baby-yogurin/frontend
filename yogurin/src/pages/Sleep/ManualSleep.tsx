import { useState } from "react";
import type { SleepRecord } from "../../types/record";
import Button from "../../components/common/Button";

type Props = {
  addSleepRecord: (r: SleepRecord) => void;
};

export default function ManualSleep({ addSleepRecord }: Props) {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleManualEntry = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSave = () => {
    if (!start || !end) return;

    const startTime = new Date(start);
    const endTime = new Date(end);

    const durationMinutes = Math.floor(
      (endTime.getTime() - startTime.getTime()) / 60000
    );

    const record: SleepRecord = {
      id: crypto.randomUUID(),
      type: "sleep",
      createdAt: new Date(),
      startTime,
      endTime,
      durationMinutes,
    };
    addSleepRecord(record);
    setStart("");
    setEnd("");
  };

  return (
    <>
      <div className="rounded-xl border p-4 space-y-3">
        <Button onClick={handleManualEntry}>Manual Entry</Button>

        {isOpen && (
          <div>
            <input
              type="datetime-local"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              className="w-full border rounded p-2"
            />
            <input
              type="datetime-local"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              className="w-full border rounded p-2"
            />
          </div>
        )}
      </div>

      <Button onClick={handleSave}>Save</Button>
    </>
  );
}
