import { Card } from "./Card";
import { Text } from "./Text";

export function OperationHistory() {
  return (
    // Container principal
    <Card
      className={`
        py-10 px-8
        select-none
      
      `}
    >
      <Text as="h1" variant="heading" className="mb-4">
        Histórico de operações
      </Text>

      {/* Lista de operações */}
      <ul className="flex flex-col gap-3">
        <Text as="li">1 + 2</Text>
        <Text as="li">3</Text>
        <Text as="li">4 * 5</Text>
      </ul>
    </Card>
  );
}
