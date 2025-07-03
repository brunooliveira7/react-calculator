import { Text } from "./components/Text";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Calculator } from "./components/Calculator";
import { OperationHistory } from "./components/OperationHistory";

export function App() {
  return (
   <main className="py-28 px-4">
    <Calculator />
    <OperationHistory />
   </main>
  );
}
