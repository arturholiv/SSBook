import React, { useState } from 'react';
import './BookItem.css';

const BookItem = ({ book }) => {

  return (
    <div className="book-item-container">
      {book ? (
        <div className="book-item">
          <img src={book.cover} alt={book.name} />
          <h3 title={book.name}>{book.name}</h3>
          <p>{book.author.name}</p>
        </div>
      ) : (
        <p>Selecione um livro para ver os detalhes.</p>
      )}
    </div>
  );
};

export default BookItem;
