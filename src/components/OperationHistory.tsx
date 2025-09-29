import { useContext } from "react";
import { Card } from "./Card";
import { Text } from "./Text";
import { CalculatorContext } from "./CalculatorContext";

export function OperationHistory() {
  const { history } = useContext(CalculatorContext);

  return (
    // Container principal
    <Card
      className={`
        py-10 px-8
        select-none
        w-full
      `}
    >
      <Text as="h1" variant="heading" className="mb-4">
        Histórico de operações
      </Text>

      {/* Lista de operações */}
      {history.length > 0 ? (
        <ul className="flex flex-col gap-3">
          {history.map((value, index) => (
            <Text key={`item-${index}`} as="li">
              {value}
            </Text>
          ))}
        </ul>
      ) : (
        <Text as="p" variant="muted">
          Nenhuma operação recente.
        </Text>
      )}
    </Card>
  );
}
