type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={`
    bg-(--background) shadow-(--shadow) rounded-2xl 
    ${className ?? ""}`}
      {...props}
    >
      {children}
    </div>
  );
}
