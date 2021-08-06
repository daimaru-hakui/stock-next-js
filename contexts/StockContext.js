import axios from "axios";
import React, { createContext, useState } from "react";

export const StockContext = createContext({});

const StockContextProvider = (props) => {
  const { children } = props;
  const [items, setItems] = useState("zaiko");

  return (
    <StockContext.Provider value={items}>{children}</StockContext.Provider>
  );
};
export default StockContextProvider;
