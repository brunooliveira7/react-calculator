# 🧮 Calculadora com React

Uma **calculadora moderna e responsiva** desenvolvida com **React, Vite e Tailwind CSS**.  
O projeto simula uma calculadora com as operações básicas e um histórico de cálculos, priorizando:

- Criação de componentes reutilizáveis  
- Uso de **hooks customizados**  
- Separação clara de responsabilidades  

---

## ✨ Funcionalidades

- **Operações Aritméticas**: adição, subtração, multiplicação e divisão.  
- **Display Duplo**: exibe a operação atual e o resultado em tempo real.  
- **Controles de Limpeza**:  
  - `C`: limpa toda a operação e o resultado  
  - `CE`: apaga o último caractere digitado  
- **Histórico de Operações**: painel lateral com registro de todos os cálculos realizados.  
- **Componentização**: interface modular e reutilizável.  
- **Gerenciamento de Estado**:  
  - Lógica de negócio isolada em um hook customizado (`useCalculator`)  
  - Estado global gerenciado via **Context API**  
- **Design Responsivo**: layout adaptado para diferentes tamanhos de tela.  

---

## 🛠️ Tecnologias Utilizadas

- **React** – biblioteca para construção da interface de usuário  
- **Vite** – ferramenta de build rápida e moderna  
- **TypeScript** – tipagem estática para maior segurança no código  
- **Tailwind CSS** – framework utility-first para estilização  

---

## 🧱 Estrutura de Componentes e Lógica

A aplicação é dividida em **componentes funcionais** e **hooks**, separando a interface da lógica de negócio:

- **`App.tsx`** → Componente raiz que organiza o layout principal, renderizando `Calculator` e `OperationHistory`.  
- **`Calculator.tsx`** → Corpo da calculadora com `Display` e `Button`, consumindo o hook `useCalculator`.  
- **`OperationHistory.tsx`** → Exibe a lista de operações passadas, consumindo o `CalculatorContext`.  
- **`Display.tsx`** → Mostra a operação em andamento e o resultado do cálculo.  
- **`Button.tsx`** → Botão genérico e reutilizável, com variantes de estilo.  
- **`Card.tsx`** → Wrapper visual para criar painéis com sombra e bordas arredondadas.  
- **`Text.tsx`** → Componente de tipografia com variantes padronizadas.  

### Hooks e Contexto

- **`useCalculator.tsx`** → Hook customizado que gerencia:
  - `operation` (operação atual)  
  - `result` (resultado do cálculo)  
  - Funções para executar e manipular operações (`doOperation`)  

- **`CalculatorContext.tsx`** → Estado global do histórico de operações (`history`), permitindo:
  - `useCalculator` atualizar os registros  
  - `OperationHistory` consumir os dados sem acoplamento direto  

---

<p align="center">
  <img alt="calculator" src="https://github.com/brunooliveira7/react-calculator/blob/main/src/assets/Layout%20Calculator.png">
</p>

✍️ Autor
Bruno Oliveira
GitHub - brunooliveira7
