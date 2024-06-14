import React, { useState, useEffect } from "react";
import { getItems } from "../firebase/firebase";

export const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    getItems().then(items => setMyItems(items));
  }, []);

  return (
    <ProductsContext.Provider value={{ myItems }}>
      {children}
    </ProductsContext.Provider>
  );
};