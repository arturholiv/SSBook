import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { AiFillPlusCircle, AiFillHeart } from 'react-icons/ai';
import { TiHome } from "react-icons/ti";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div  className="footer-content">
        <h1 className="footer-title">SSBOOK</h1>
        <div className="rights-reserved">© 2023 Todos os Direitos Reservados</div>
      </div>

      <div  className="footer-content-mobile">
        <div className='icon-home'><TiHome /> Início</div>
        <div className='icon'><AiFillPlusCircle /> Adicionar</div>
        <div className='icon'><BsSearch /> Buscar</div>
        <div className='icon'><AiFillHeart /> Favoritos</div>
      </div>
    </div>
  );
};

export default Footer;
