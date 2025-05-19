import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '@src/styles/BookDetail.css';
import { fakeApi } from '@src/services/fakeApi';

const BookDetail = () => {

  const allBooks = fakeApi.docs

  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const bookId = allBooks.find((b) => b.cover_i === parseInt(id));
    setBook(bookId);
  }, [id, allBooks]);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  if (!book) return <p>Libro no encontrado</p>;

  return (
    <div className="book-detail-container">
      <div className="image-section">
        <img
          src={`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-L.jpg`}
          alt={book.title}
          className="py-3 "
        />
      </div>
      <div className="info-section">
        <h3 className="genre">Disponible en:
          <span>{' '}{book.language.join(', ').toUpperCase()}.</span>
        </h3>
        <h1>{book.title.toUpperCase()}</h1>
        <p className="author"><em>Autor: {book.author_name}</em></p>
        <p className="release"><em>Fecha de lanzamiento: {book.first_publish_year}</em></p>
        <p className="description">{book.description}</p>

        <div className="price">
          <strong>${Math.floor(Math.random() * 100000).toLocaleString()} </strong>
        </div>

        <div className="quantity-selector">
          <button onClick={decrement}>-</button>
          <span>{quantity}</span>
          <button onClick={increment}>+</button>
        </div>

        <button className="add-to-cart">Añadir al carrito</button>
      </div>
    </div>
  );
}

export default BookDetail
