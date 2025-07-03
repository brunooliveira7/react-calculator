import { Text } from "./Text";

interface DisplayProps {
  className?: string;
  operation: string | number;
  result: string | number;
}

export function Display({ className, operation, result }: DisplayProps) {
  return (
    // Box de exibição do resultado
    <div
      className={`
        flex flex-col gap-2 p-[1.375rem] cursor-default 
        select-none
        ${className ?? ""}
      `}
     >
      {/*Primeira linha - histórico da digitação  */}
      <Text as="div" variant="muted" className="flex items-center justify-end">
        {operation}
      </Text>

      {/*Segunda linha - resultado */}
      <div className={`flex items-center justify-between`}>
        <Text variant="muted">=</Text>
        <Text variant="blast">{result}</Text>
      </div>
    </div>
  );
}
