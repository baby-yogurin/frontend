import { Settings } from "lucide-react";

export default function Header() {
  return (
    <header
      className=" h-[var(--header-height)] px-4
        flex items-center justify-between border-b border-border sticky top-0 z-50 bg-surface text-bold text-primary cursor-pointer"
    >
      <span className="text-xl">Joan</span>
      <Settings />
    </header>
  );
}
