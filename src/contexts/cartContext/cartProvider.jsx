import { CartContext } from "./cartContext";
import { useState } from "react";

export function CartProvider({ children }) {
    const [books, setBooks] = useState([
      {
          title: "Harry Potter",
          author: "jk.Rwling",
          count: 2,
          price: 50000
      },
      {
          title: "Harry Potter 2",
          author: "jk.Rwling",
          count: 2,
          price: 80000
      },
      {
          title: "Harry Potter 4",
          author: "jk.Rwling",
          count: 2,
          price: 75000
      }
  ]);

    const updateBooks = (action) => {
        console.log(action);
        setBooks();
    }
  
    return (
      <CartContext.Provider value={{ books, updateBooks }}>
        {children}
      </CartContext.Provider>
    );
  }