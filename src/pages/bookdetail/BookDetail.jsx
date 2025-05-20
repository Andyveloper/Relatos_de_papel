import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import '@src/styles/BookDetail.css';
import { fakeApi } from '@src/services/fakeApi';
import { CartInfoContext } from '@src/contexts/cartInfoContext/cartInfoContext';
import { Dialog, DialogContent, DialogTitle, DialogTrigger, DialogHeader } from  '@src/components/ui/dialog';

const BookDetail = () => {
  const allBooks = fakeApi.docs;
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { updateBooks } = useContext(CartInfoContext);

  useEffect(() => {
    const bookId = allBooks.find((b) => b.cover_i === parseInt(id));
    setBook(bookId);
  }, [id, allBooks]);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleCart = () => {
    setQuantity(1);
  }

  const addToCart = () => {
    updateBooks('add', {
      title: book.title,
      count: quantity,
      coverEdition: book.cover_edition_key,
      price: book.price
    })
  }

  if (!book) return <p>Libro no encontrado</p>;

  return (
    <div className="book-detail">
      <div>
        <img
          src={`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-L.jpg`}
          alt={book.title}
          className="book-detail__image"
        />
      </div>

      <div className="book-detail__info">
        <h3 className="book-detail__genre">
          Disponible en: <span>{book.language.join(', ').toUpperCase()}.</span>
        </h3>

        <h1 className="book-detail__title">{book.title.toUpperCase()}</h1>

        <p className="book-detail__author"><em>Autor: {book.author_name}</em></p>
        <p className="book-detail__release"><em>Fecha de lanzamiento: {book.first_publish_year}</em></p>

        <p className="book-detail__description">{book.description}</p>

        <div className="book-detail__price">
          <strong>${book.price.toLocaleString('es-CO', { minimumFractionDigits: 2 })}</strong>
        </div>

        <div className="book-detail__quantity">
          <button className="book-detail__quantity-button" onClick={decrement}>-</button>
          <span className="book-detail__quantity-value">{quantity}</span>
          <button className="book-detail__quantity-button" onClick={increment}>+</button>
        </div>
        <Dialog className="checkout-summary__dialog"
          onOpenChange={(open) => {
            if (!open) handleCart();
          }}
        >
          <DialogTrigger asChild>
            <button
              onClick={addToCart}
              className="book-detail__add-to-cart"
            >
              Añadir al carrito
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <span id="check" className="material-symbols-outlined" >check_circle</span>
              <DialogTitle className="checkout-summary__dialog">Libro agregado con exito</DialogTitle>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default BookDetail;
