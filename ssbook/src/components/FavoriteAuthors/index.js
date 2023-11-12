import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_FAVORITE_AUTHORS } from '../../Database/Queries';
import './FavoriteAuthors.css'; // Make sure to import your CSS file

const FavoriteAuthors = () => {
  const { loading, error, data } = useQuery(GET_FAVORITE_AUTHORS);

  if (loading) return <p>Carregando autores favoritos...</p>;
  if (error) return <p>Error Carregando autores favoritos: {error.message}</p>;

  const favoriteAuthors = data.favoriteAuthors || [];

  return (
    <div className="favorite-authors-container">
      <div className="favorite-authors-header">
        <h1 className="favorite-authors-title">Artistas Favoritos</h1>
        <h4 className="favorite-authors-view-all">ver todos</h4>
      </div>
      <ul className="author-list">
        {favoriteAuthors.map((author) => (
          <li key={author.name} className='author-item'>
            <img src={author.picture} alt={author.name} />
            <div className='author-info'>
              <span>{author.name}</span>
              <p>{author.booksCount} livros</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteAuthors;
