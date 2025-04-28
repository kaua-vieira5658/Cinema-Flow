import { useContext } from "react";
import { SearchModalContext } from "../context/SearchModalContext";

export function useSearchModalContext() {
  const context = useContext(SearchModalContext);

  if (!context) {
    throw new Error("O contexto devo ser usado dentro do provider.");
  }

  return context;
}
