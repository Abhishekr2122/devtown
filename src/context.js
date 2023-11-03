import { createContext, useContext, useState } from "react";

const BurgerContext = createContext();

export default function BurgerContextProvider({ children }) {
  const [filterBy, setFilterBy] = useState("");
  const [sortBy, setSortBy] = useState("");

  function handleFilterBy(filterValue) {
    setFilterBy(filterValue);
  }

  function handleSortBy(sortValue) {
    setSortBy(sortValue);
  }

  return (
    <BurgerContext.Provider
      value={{ filterBy, sortBy, handleFilterBy, handleSortBy }}
    >
      {children}
    </BurgerContext.Provider>
  );
}

export function useBurger() {
  const context = useContext(BurgerContext);
  return context;
}
