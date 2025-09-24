import { Card } from "./Card";
import { Display } from "./Display";
import { Button } from "./Button";

const buttons = [
  [
    { input: "CE" },
    { input: "C", className: "flex-1 h-16" },
    { input: "/", variant: "primary" },
  ],
  [
    { input: "7" },
    { input: "8" },
    { input: "9" },
    { input: "*", variant: "primary" },
  ],
  [
    { input: "4" },
    { input: "5" },
    { input: "6" },
    { input: "-", variant: "primary" },
  ],
  [
    { input: "1" },
    { input: "2" },
    { input: "3" },
    { input: "+", variant: "primary" },
  ],
  [
    { input: "0", className: "flex-1 h-16" },
    { input: "," },
    { input: "=", className: "w-16 h-16 bg-[#7F45E2]" },
  ],
];

export function Calculator({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    // Container principal
    <Card
      className={`
      flex flex-col gap-[1.625rem] w-[22.25rem]
      pt-14 px-8 pb-8
      ${className ?? ""}
      `}
    >
      {children}

      {/* Exibição do resultado */}
      <Display operation="1 + 2" result="3" />

      {/* Botões da calculadora */}
      <div className="flex flex-col gap-3">
        {buttons.map((row, index) => (
          <div key={`row-${index}`} className="flex gap-3">
            {row.map((button) => (
              <Button
                key={button.input}
                className={button.className ?? "w-16 h-16"}
                variant={(button.variant as "primary" | "default") ?? "default"}
              >
                {button.input}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </Card>
  );
}
