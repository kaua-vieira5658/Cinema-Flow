import { createContext, ReactNode, useState } from "react";

// Definindo tipo das propriedades do context
export interface SearchModalContextType {
  isOpen: boolean;
  handleIsOpen: (isOpen: boolean) => void;
}

const SearchModalContext = createContext<SearchModalContextType | undefined>(
  undefined
);

export default function SearchModalContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen(isOpen: boolean) {
    setIsOpen(isOpen);
  }

  return (
    <SearchModalContext.Provider value={{ isOpen, handleIsOpen }}>
      {children}
    </SearchModalContext.Provider>
  );
}

export { SearchModalContext };
