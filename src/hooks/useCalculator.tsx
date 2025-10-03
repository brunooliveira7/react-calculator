import { useContext, useState } from "react";
import { CalculatorContext } from "../context/CalculatorContext";

export function useCalculator() {
  const [operation, setOperation] = useState(""); //guarda valor digitado
  const [result, setResult] = useState("");
  const { updateHistory } = useContext(CalculatorContext);

  function doOperation(input: string) {
    if (input === "C") {
      setOperation(""); //apaga a operação
      setResult(""); //apaga o resultado
      return;
    }

    if (input === "CE") {
      setResult("");
      setOperation(operation.slice(0, -1));
      return;
    }

    if (input === "=") {
      const operationResult = eval(operation.replace(/,/g, ".")); //eval faz quaisquer operações
      const parsedResult = operationResult.toString()?.replace(/\./g, ",");
      setResult(parsedResult);
      updateHistory(operation, parsedResult); //guarda e atualiza a lista com o [] do context
      return;
    }

    //limpa o input de cima e continua uma operação com o result da prev-operation
    if (result) {
      setOperation(isNaN(Number(input)) ? `${result}${input}` : input);
      setResult("");
      return;
    }

    if (input === "," && !operation.endsWith(",")) {
      setOperation(`${operation},`);
      return;
    }

    setOperation(`${operation}${input}`); //operação vai ser incrementada com input
  }

  return { operation, result, doOperation };
}
