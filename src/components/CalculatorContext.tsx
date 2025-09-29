import React, { useState } from "react";
import { createContext } from "react";

interface CalculatorContextProps {
  history: string[];
  updateHistory: (operation: string, parsedResult: string) => void;
}

export const CalculatorContext = createContext<CalculatorContextProps>({
  history: [],
  updateHistory: () => {},
});

interface CalculatorProviderProps {
  children: React.ReactNode;
}

export function CalculatorProvider({ children }: CalculatorProviderProps) {
  const [history, setHistory] = useState<string[]>([]);

  function updateHistory(operation: string, parsedResult: string) {
    setHistory((prev) => [...prev, `${operation}=${parsedResult}`]);
  }

  return (
    <CalculatorContext.Provider value={{ history, updateHistory }}>
      {children}
    </CalculatorContext.Provider>
  );
}
