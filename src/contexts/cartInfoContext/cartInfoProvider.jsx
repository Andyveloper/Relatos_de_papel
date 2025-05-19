import { useState } from "react";
import { CartInfoContext } from "./cartInfoContext";

export const CartInfoProvider = ({ children }) => {
  const [booksInfo, setBooksInfo] = useState([]);

  const add = (book) => {
    const exists = booksInfo.some(el => el.title === book.title);
    if (!exists) {
      setBooksInfo(prev => [...prev, { ...book }]);
    } else if(book.count > 1){
      addMore(book);
    } else {
      addOne(book);
    }
  };

  const addOne = (book) => {
    const updated = booksInfo.map(bookInfo => {
      if (bookInfo.title === book.title) {
        return { ...bookInfo, count: bookInfo.count + 1 };
      }
      return bookInfo;
    });

    setBooksInfo(updated);
  };

    const addMore = (book) => {
    const updated = booksInfo.map(bookInfo => {
       if (bookInfo.title === book.title) {
        bookInfo =  { 
          title: bookInfo.title,
          count: bookInfo.count + book.count,
          coverEdition: bookInfo.coverEdition,
          price: bookInfo.price
        };
        return bookInfo;
      }
      return bookInfo;
    });

    setBooksInfo(updated);
  };

  const removeOne = (book) => {
    let selectedBook = {};
    const updated = booksInfo.map(bookInfo => {
      if (bookInfo.title === book.title) {
        bookInfo =  { 
          title: bookInfo.title,
          count: bookInfo.count - 1,
          coverEdition: bookInfo.coverEdition,
          price: bookInfo.price
        };
        selectedBook = bookInfo;
        return bookInfo;
      }
      return bookInfo;
    });

    if (selectedBook.count < 1) {
      remove(book);
      return;
    }
    setBooksInfo(updated);
  };

  const remove = (book) => {
    const updated = booksInfo.filter(bookInfo => bookInfo.title !== book.title);
    setBooksInfo(updated);

  }

  const updateBooks = (action, book) => {

    switch (action) {
      case 'add':
        add(book);
        break;
      case 'addOne':
        addOne(book);
        break;
      case 'removeOne':
        removeOne(book);
        break;
      case 'remove':
        remove(book);
        break;
    }
  };

  return (
    <CartInfoContext.Provider value={{ booksInfo, updateBooks }}>
      {children}
    </CartInfoContext.Provider>
  );
};
