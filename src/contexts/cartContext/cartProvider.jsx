import { CartContext } from "./cartContext";
import { useState } from "react";

export function CartProvider({ children }) {

  const [books, setBooks] = useState([
    {
      title: "Harry Potter 4",
      author: "jk.Rwling",
      coverEdition: "OL23321225M",
      count: 2,
      price: 75000
    }
  ]);

  const addOne = (book) => {
    const newBooks = books.forEach(el => book.title == el.title ? el.count++ : el.count);
    setBooks(newBooks);
  }

  const removeOne = (book) => {
    const newBooks = books.forEach(el => {
      if (book.title == el.title && el.count == 1) {
        el.count--;
        remove(book);
      }
      if (book.title == el.title) {
        el.count--;
      }
    });

    setBooks(newBooks);
  }

  const remove = (book) => {
    const newBooks = books.filter(el => book.title !== el.title);
    setBooks(newBooks);
  }

  const add = (book) => {
    selectedBook = {
      ...book,
      count: 1,
    }
    setBooks(prevValue => [...prevValue, selectedBook])
  }

  // const actionFactory = [
  //   action.add = (book) => add(book),
  //   action.addOne = (book) => addOne(book),
  //   action.removeOne = (book) => removeOne(book),
  //   action.remove = (book) => remove(book)
  // ]



  const updateBooks = (action, book) => {
    //  actionFactory[action](book);        
    setBooks();
  }

  return (
    <CartContext.Provider value={{ books, updateBooks }}>
      {children}
    </CartContext.Provider>
  );
}