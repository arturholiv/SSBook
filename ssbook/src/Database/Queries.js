import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
  query GetBooks {
    allBooks {
      id
      name
      cover
      author {
        name
      }
      description
      isFavorite
      category
      __typename
    }
  }
`;

export const GET_BOOK_DETAILS = gql`
  query GetBookDetails($bookId: ID!) {
    book(id: $bookId) {
      id
      name
      cover
      author {
        name
      }
      description
      isFavorite
      category
    }
  }
`;

export const GET_FAVORITES = gql`
  query GetFavorites {
    favoriteBooks {
      id
      name
      cover
      author {
        name
      }
    }
  }
`;

export const GET_FAVORITE_AUTHORS = gql`
  query GetFavoriteAuthors {
    favoriteAuthors {
      name
      picture
      booksCount
    }
  }
`;