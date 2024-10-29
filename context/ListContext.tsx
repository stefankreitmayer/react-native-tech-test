import React, { createContext, useContext, useState } from "react";

interface ListContextType {
  itemsToShow: number;
  setItemsToShow: React.Dispatch<React.SetStateAction<number>>;
}

const ListContext = createContext<ListContextType | undefined>(undefined);

export const ListProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [itemsToShow, setItemsToShow] = useState<number>(10);

  return (
    <ListContext.Provider value={{ itemsToShow, setItemsToShow }}>
      {children}
    </ListContext.Provider>
  );
};

export const useListContext = () => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error("useListContext must be used within a ListProvider");
  }
  return context;
};
