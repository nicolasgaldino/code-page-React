import React from 'react';
import styles from './Footer.module.css'
const {
  footerContainer,
  footerDivUm,
  footerDivDois,
  footerDivTres,
  footerDivQuatro,
  footerSocialMedia
} = styles;

export const Footer = () => {
  return (
    <footer className={footerContainer}>
      <div className={footerDivUm}>
        <h1>Codar<span>.</span></h1>
        <p>Criamos websites incríveis</p>
      </div>
      <div className={footerDivDois}>
        <h1>Sobre</h1>
        <p>Amamos criar soluções a entregar sites incríveis</p>
      </div>
      <div className={footerDivTres}>
        <h1>Contato</h1>
        <p>123 Av. Faz de Conta - Bairro 171</p>
        <p>Tel(21).: 97490-3005</p>
        <p>nicolasesmael1998@gmail.com</p>
      </div>
      <div className={footerDivQuatro}>
        <h1>Redes Sociais</h1>
        <div className={footerSocialMedia}>
          <a href="https://github.com/nicolasgaldino"><ion-icon name="logo-github"></ion-icon></a>
          <a href="https://www.linkedin.com/in/nícolas-galdino-esmael-8370ab199"><ion-icon name="logo-linkedin"></ion-icon></a>
        </div>
      </div>
    </footer>
  )
}
