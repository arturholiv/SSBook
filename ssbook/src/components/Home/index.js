import React from 'react';
import FavoriteAuthors from '../FavoriteAuthors';
import FavoriteBooks from '../FavoriteBooks';
import BookList from '../BookList';
import Header from '../Header';
import './Home.css';
import Footer from '../Footer';

const Home = () => {
  return (
    <div>
        <Header /> 
        <div className='home-container'>
          <FavoriteBooks />
          <div className='second-session'>
            <FavoriteAuthors />
            <BookList />
          </div>
        </div>
        <Footer/>
    </div>
  );
};

export default Home;
