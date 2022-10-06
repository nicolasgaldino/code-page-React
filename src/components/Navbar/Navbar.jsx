import React from 'react';
import styles from './Navbar.module.css';
const {
  navContainer,
  ulCont,
  dropdownMenu,
} = styles;

export const Navbar = () => {
  return (
    <nav className={navContainer}>
      <h1><a href="index.html">Codar<span>.</span></a></h1>
      <ul className={ulCont}>
        <li><a href="#inicio">Início</a></li>
        <li><a href="html/sobre.html">Sobre</a></li>
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
