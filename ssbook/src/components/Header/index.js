import React from 'react';
import './Header.css';
import { BsSearch } from 'react-icons/bs';
import { BiSolidUserCircle } from 'react-icons/bi';
import { AiFillPlusCircle, AiFillHeart } from 'react-icons/ai';


const Header = () => {
  return (
    <div className="header-container">
      <div className="header-title">
        <h1 className='title-one'>SS</h1>
        <h1 className='title-two'>BOOK</h1>
      </div>
      <div className="header-search">
        <p>Busque um livro</p>
        <BsSearch className='icon-search'/>
      </div>
      <div className="header-buttons">
        <div className='header-icon'><AiFillPlusCircle className='icon'/> Adicionar</div>
        <div className='header-icon'><AiFillHeart className='icon'/> Favoritos</div>
        <div className="header-icon"><BiSolidUserCircle className='icon-user'/>ArturHoliv</div>
      </div>
    </div>
  );
};

export default Header;
