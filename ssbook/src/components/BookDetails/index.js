import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';  // Importe o hook useParams e o componente Link
import { GET_BOOK_DETAILS } from '../../Database/Queries';

const BookDetails = () => {
  const { id: bookId } = useParams();  // Use o hook useParams para obter as propriedades de rota

  const { loading, error, data } = useQuery(GET_BOOK_DETAILS, {
    variables: { bookId },
  });

  useEffect(() => {
    console.log('bookId:', bookId);
  }, [bookId]);

  if (loading) return <p>Carregando detalhes do livro...</p>;

  if (error) {
    console.error('Erro na query de detalhes do livro:', error);
    return <p>Um erro ocorreu ao carregar os detalhes do livro. Consulte o console para mais detalhes.</p>;
  }

  const bookDetails = data?.book || {};

  return (
    <div className="book-detail-container">
      <Link to="/">Voltar</Link> 
      <h2>Detalhes do Livro</h2>
      <div>
        <h3>{bookDetails.name}</h3>
        <img src={bookDetails.cover} alt={bookDetails.name} />
        <p>Autor: {bookDetails.author.name}</p>
        <p>Ano de Publicação: {bookDetails.year}</p>
        <p>Categoria: {bookDetails.category}</p>
        <p>Descrição: {bookDetails.description}</p>
      </div>
    </div>
  );
};

export default BookDetails;
