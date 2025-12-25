import { useState } from "react";
import type { SleepRecord } from "../../types/record";
import RecordSleep from "./RecordSleep";
import ManualSleep from "./ManualSleep";

export default function SleepPage() {
  const [sleepRecords, setSleepRecords] = useState<SleepRecord[]>([]);
  const [activeSleep, setActiveSleep] = useState<SleepRecord | null>(null);
  const addSleepRecord = (record: SleepRecord) => {
    setSleepRecords((prev) => [record, ...prev]);
  };

  return (
    <div className="p-4">
      <h1 className="text-lg font-semibold mb-4">Sleep</h1>
      <RecordSleep
        activeSleep={activeSleep}
        setActiveSleep={setActiveSleep}
        addSleepRecord={addSleepRecord}
      />
      <ManualSleep addSleepRecord={addSleepRecord} />
    </div>
  );
}
