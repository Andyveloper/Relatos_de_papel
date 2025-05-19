import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mockBooks } from '@src/services/mockBooks';
import '@src/styles/BookDetail.css';

const BookDetail = () => {
  const { id } = useParams(); 
  const [book, setBook] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const bookId = mockBooks.find((b) => b.id === parseInt(id));
    setBook(bookId);
  }, [id]);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  if (!book) return <p>Libro no encontrado</p>;

  return (
    <div className="book-detail-container">
      <div className="image-section">
        <img src={book.image} alt={book.title} />
      </div>
      <div className="info-section">
        <h3 className="genre">{book.genre}</h3>
        <h1>{book.title}</h1>
        <p className="author"><em>Autor: {book.author}</em></p>
        <p className="release"><em>Fecha de lanzamiento: {book.release_date}</em></p>
        <p className="description">{book.description}</p>

        <div className="price">
          <strong>${book.currency} {book.price.toLocaleString()}</strong>
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