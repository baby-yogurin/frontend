import { useMemo, useState } from "react";
import Button from "../../components/common/Button";

type Props = {
  start: string;
  end: string;
  setStart: (v: string) => void;
  setEnd: (v: string) => void;
};

export default function ManualSleep({ start, end, setStart, setEnd }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleManualEntry = () => {
    setIsOpen((prev) => !prev);
  };

  const durationMinutes = useMemo(() => {
    if (!start || !end) return null;
    const s = new Date(start);
    const e = new Date(end);
    const diff = Math.floor((e.getTime() - s.getTime()) / 60000);

    return diff > 0 ? diff : null;
  }, [start, end]);

  return (
    <>
      <div className="rounded-xl border p-4 space-y-3">
        <Button onClick={handleManualEntry}>Manual Entry</Button>

        {isOpen && (
          <>
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

            {durationMinutes !== null && (
              <p className="text-text-sub text-sm">
                Duration : {durationMinutes} min
              </p>
            )}
          </>
        )}
      </div>
    </>
  );
}
