import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
const {
  navContainer,
  ulCont,
  dropdownMenu,
} = styles;

export const Navbar = () => {
  return (
    <nav className={navContainer}>
      <h1><Link to="/code-page-React">Codar<span>.</span></Link></h1>
      <ul className={ulCont}>
        <li><Link to="/code-page-React">Início</Link></li>
        <li><Link to="/about">Sobre</Link></li>
        <li><Link to="/services">Serviço</Link></li>
        <li data-dropdown>
          <button>Conta</button>
          <ul className={dropdownMenu}>
            <li><Link to="/login">Entrar</Link></li>
            <li><Link to="/cadastro">Cadastre-se</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}
