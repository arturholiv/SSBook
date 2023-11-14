import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { GET_BOOK_DETAILS } from '../../Database/Queries';
import { BsShareFill, BsFillHeartFill } from 'react-icons/bs';
import { FiDownload } from 'react-icons/fi';
import { GiReturnArrow } from 'react-icons/gi';
import './BookDetails.css';


const BookDetails = () => {
  const { id: bookId } = useParams();
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
      <Link to="/" className="back-link"><GiReturnArrow /></Link>
      <div className="book-cover-section">
          <img src={bookDetails.cover} alt={bookDetails.name} />
          <h3 className='icon-element'><BsFillHeartFill className='icon' />Favoritar</h3>
          <h3 className='icon-element'><BsShareFill className='icon'/>Compartilhar</h3> 
          <h3 className='icon-element'><FiDownload className='icon'/>Salvar em uma lista</h3>
      </div>
      <div className="book-details-section">
        <h3>{bookDetails.name}</h3>
        <p>{bookDetails.author.name}</p>
        {/* <p>Ano de Publicação: {bookDetails.year}</p> */}
        <div className="book-description">
          <p>{bookDetails.description}</p>
        </div>  
      </div>
    </div>
  );
};

export default BookDetails;