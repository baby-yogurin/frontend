import type { ComponentProps } from "react";

type ButtonVariant = "secondary" | "cancelled";

type ButtonProps = {
  variant?: ButtonVariant;
} & ComponentProps<"button">;

const baseStyle =
  "w-28 rounded-lg py-3 font-medium transition-colors disabled:opacity-50";

const variantStyle: Record<ButtonVariant, string> = {
  secondary: "bg-secondary text-bg",
  cancelled: "bg-disabled text-bg",
};

export default function Button({
  variant = "secondary",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      {...props}
      className={`${baseStyle} ${variantStyle[variant]} ${className ?? ""}`}
    />
  );
}
