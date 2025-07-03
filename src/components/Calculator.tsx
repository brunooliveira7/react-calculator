import { Card } from "./Card";
import { Display } from "./Display";
import { Button } from "./Button";

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
        {/* Primeira linha */}
        <div className="flex gap-3">
          <Button className="w-16 h-16">CE</Button>
          <Button className="flex-1 h-16">C</Button>
          <Button className="w-16 h-16" variant="primary">
            /
          </Button>
        </div>
        {/* Segunda linha */}
        <div className="flex gap-3">
          <Button className="w-16 h-16">7</Button>
          <Button className="w-16 h-16">8</Button>
          <Button className="w-16 h-16">9</Button>
          <Button className="w-16 h-16" variant="primary">
            *
          </Button>
        </div>
        {/* Terceira linha */}
        <div className="flex gap-3">
          <Button className="w-16 h-16">4</Button>
          <Button className="w-16 h-16">5</Button>
          <Button className="w-16 h-16">6</Button>
          <Button className="w-16 h-16" variant="primary">
            -
          </Button>
        </div>
        {/* Quarta linha */}
        <div className="flex gap-3">
          <Button className="w-16 h-16">1</Button>
          <Button className="w-16 h-16">2</Button>
          <Button className="w-16 h-16">3</Button>
          <Button className="w-16 h-16" variant="primary">
            +
          </Button>
        </div>
        {/* Quinta linha */}
        <div className="flex gap-3">
          <Button className="flex-1 h-16">0</Button>
          <Button className="w-16 h-16">,</Button>
          <Button className="w-16 h-16" variant="primary">
            =
          </Button>
        </div>
      </div>
    </Card>
  );
}
