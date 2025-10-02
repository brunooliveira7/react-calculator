import React, { useEffect, useState } from "react";
import { createContext } from "react";

interface CalculatorContextProps {
  history: string[];
  updateHistory: (operation: string, parsedResult: string) => void;
}

interface CalculatorProviderProps {
  children: React.ReactNode;
}

//criando o context
export const CalculatorContext = createContext<CalculatorContextProps>({
  history: [],
  updateHistory: () => {},
});

//criando o provider
export function CalculatorProvider({ children }: CalculatorProviderProps) {
  const [history, setHistory] = useState<string[]>([]);
  const historyStorageKey = "history";

  //consumir e renderizar histórico - [] - dependência quando o componente for criado
  useEffect(() => {
    const savedHistory = localStorage.getItem(historyStorageKey);
    setHistory(JSON.parse(savedHistory || "[]"));
  }, []);

  function updateHistory(operation: string, parsedResult: string) {
    setHistory((prev) => {
      const updatedHistory = [...prev, `${operation}=${parsedResult}`]; //salvando no localStorage
      localStorage.setItem(historyStorageKey, JSON.stringify(updatedHistory));
      return updatedHistory;
    }); //adiciona a operação = resultado, mais recente ao final do [] e atualiza o estado.
  }

  return (
    <CalculatorContext.Provider value={{ history, updateHistory }}>
      {children} {/*tem que passar*/}
    </CalculatorContext.Provider>
  );
}
