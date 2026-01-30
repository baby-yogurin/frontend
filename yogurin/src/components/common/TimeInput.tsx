import type { ChangeEvent } from "react";

interface TimeInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export default function TimeInput({ label, value, onChange }: TimeInputProps) {
  return (
    <div className="flex justify-center gap-10">
      <label className="text-md text-text-main">{label}</label>
      <input
        type="time"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        className="h-10 text-md text-text-main"
      />
    </div>
  );
}
