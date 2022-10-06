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
      <h1><Link to="/">Codar<span>.</span></Link></h1>
      <ul className={ulCont}>
        <li><a href="#inicio">Início</a></li>
        <li><Link to="/about">Sobre</Link></li>
        <li><a href="html/servicoPag.html">Serviço</a></li>
        <li data-dropdown>
          <a href="#"><button>Conta</button></a>
          <ul className={dropdownMenu}>
            <li><a href="html/login.html">Entrar</a></li>
            <li><a href="html/cadastro.html">Cadastre-se</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}
