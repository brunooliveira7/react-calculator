import { Text } from "./Text";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  variant?: keyof typeof buttonVariants;
  onClick?: () => void;
}

const buttonVariants = {
  default: "bg-(--background)",
  primary: "bg-(--primary)",
} as const;

export function Button({
  variant = "default",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <Text
      as="button"
      variant="heading"
      className={`
      flex items-center justify-center rounded-xl p-3 cursor-pointer
      text-(--text) bg-linear-(--gradient) hover:bg-linear-(--gradient-hover)
      shadow-(--shadow)
      ${buttonVariants[variant]}
      ${className ?? ""}
    `}
      {...props}
    >
      {children}
    </Text>
  );
}
