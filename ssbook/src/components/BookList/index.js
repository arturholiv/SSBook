import React, { useEffect } from 'react';
import { ApolloProvider, useLazyQuery, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_BOOKS, GET_BOOK_DETAILS } from '../../Database/Queries';
import client from '../../Database/Apollo';
import BookItem from '../BookItem';
import './BookList.css'

const BookList = () => {
  const [selectedBook, setSelectedBook] = React.useState(null);
  const [loadBookDetails, { loading: bookDetailsLoading, error: bookDetailsError, data: bookDetailsData }] = useLazyQuery(GET_BOOK_DETAILS);

  useEffect(() => {
    if (selectedBook) {
      loadBookDetails({
        variables: { bookId: selectedBook.id },
      });
    }
  }, [selectedBook, loadBookDetails]);

  const { loading: booksLoading, error: booksError, data: booksData } = useQuery(GET_BOOKS);

  if (booksLoading) return <p>Carregando livros...</p>;

  if (booksError) {
    console.error('Erro na query de livros:', booksError);
    return <p>Um erro ocorreu ao carregar livros. Consulte o console para mais detalhes.</p>;
  }

  const books = booksData?.allBooks || [];

  if (bookDetailsLoading) return <p>Carregando detalhes do livro...</p>;

  if (bookDetailsError) {
    console.error('Erro na query de detalhes do livro:', bookDetailsError);
    return <p>Um erro ocorreu ao carregar os detalhes do livro. Consulte o console para mais detalhes.</p>;
  }

  return (
      <div className='book-list-container'>
        <div className="book-list-header">
          <h2 className="book-list-title">Biblioteca</h2>
          <div className='book-list-tabs'>
            <div className='book-list-tab'>Todos</div>
            <div className='book-list-tab'>Romance</div>
            <div className='book-list-tab'>Aventura</div>
            <div className='book-list-tab'>Comédia</div>
          </div>
        </div>
        <div className='book-list'>
          {books.map((book) => (
            <Link key={book.id} to={`/book/${book.id}`} className="book-list-item">
              <BookItem book={book} />
            </Link>
          ))}
        </div>
      </div>
  );
};

export default BookList;