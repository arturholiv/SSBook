import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './Database/Apollo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookDetails from './components/BookDetails';
import Home from './components/Home';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="book/:id" element={<BookDetails />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
