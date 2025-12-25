import type { ReactNode } from "react";

type ButtonVariant = "primary" | "feeding";

type Props = {
  children: ReactNode;
  onClick: () => void;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  disabled?: boolean;
};

const baseStyle =
  "rounded-lg py-3 font-medium transition-colors disabled:opacity-50";

const variantStyle: Record<ButtonVariant, string> = {
  primary: "bg-primary text-bg",
  feeding: "bg-feeding text-bg",
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  fullWidth = true,
  disabled = false,
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
    ${baseStyle}
    ${variantStyle[variant]}
    ${fullWidth ? "w-full" : ""}`}
    >
      {children}
    </button>
  );
}
