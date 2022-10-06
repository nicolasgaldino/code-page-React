import React from 'react';
import TeamWorkPicture from '../../assets/img/team-work-desktop.jpg'
import styles from './ServicesPage.module.css';
const {
  servicosPag,
  servicos,
  nossosServicosContainer,
  servicoText,
  item,
} = styles;

export const ServicesPage = () => {
  return (
    <>
      <main className={servicosPag}>
        <div className={servicos}>
          <h1>Nossos Serviços</h1>
          <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.</p>
        </div>
        <div className={nossosServicosContainer}>
          <div className={servicoText}>
            <div>
              <div className={item}>
                <ion-icon name="bar-chart-outline"></ion-icon>
                <h2>Estratégia de crescimento</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
              </div>
              <div className={item}>
                <ion-icon name="resize-outline"></ion-icon>
                <h2>Grandes resultados</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
              </div>
            </div>
            <div>
              <div className={item}>
                <ion-icon name="people-outline"></ion-icon>
                <h2>Conhecimento de alto nível</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
              </div>
              <div className={item}>
                <ion-icon name="calendar-outline"></ion-icon>
                <h2>Suporte 24/7</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
              </div>
            </div>
          </div>
          <img src={TeamWorkPicture} alt="Background Pic" />
        </div>
      </main>
    </>
  )
}
