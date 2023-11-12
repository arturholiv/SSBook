import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_FAVORITES } from '../../Database/Queries';
import BookItem from '../BookItem';
import './FavoriteBooks.css'

const FavoriteBooks = () => {
  const { loading, error, data } = useQuery(GET_FAVORITES);

  if (loading) return <p>Loading favorite books...</p>;
  if (error) return <p>Error loading favorite books: {error.message}</p>;

  const favoriteBooks = data.favoriteBooks || [];

  return (
    <div className="favorite-books-container">
      <div className='favorite-tabs'>
        <h4>Meus Livros</h4>
        <h4>Emprestados</h4>
        <hr/>
      </div>
      <div className="favorite-books-header">
        <h1 className="favorite-books-title">Livros Favoritos</h1>
        <h4 className="favorite-books-view-all">ver todos</h4>
      </div>
      <div className="favorite-books-carousel">
        {favoriteBooks.map((book) => (
          <Link key={book.id} to={`/book/${book.id}`}>
            <BookItem book={book} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FavoriteBooks;
