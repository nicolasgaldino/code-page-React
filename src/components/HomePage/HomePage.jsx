import React from 'react';
import { Link } from 'react-router-dom';
import VideoCall from '../../assets/img/video_call.png';
import CodingPicture from '../../assets/img/coding_.png';
import ClientPicOne from '../../assets/img/profile1.jpg'
import ClientPicTwo from '../../assets/img/profile2.jpg'
import styles from './HomePage.module.css';
const {
  inicioContainer,
  inicioText,
  servicoContainer,
  servicoItens,
  contatoContainer,
  contato,
  relatoClientes,
  clienteImg,
  cliente,
} = styles;

export const HomePage = () => {
  return (
    <>
      <section className={inicioContainer} id="inicio">
        <div>
          <img src={VideoCall} alt="Imagem Publicitária" />
        </div>
        <div className={inicioText}>
          <h2>Alavanque seu negócio com um</h2>
          <h1>Website incrível</h1>
          <button><Link to="/orcamento">Solicitar orçamento</Link></button>
        </div>
      </section>
      <section className={servicoContainer}>
        <div>
          <img src={CodingPicture} alt="Imagem Publicitária" />
        </div>
        <div>
          <ul>
            <li className={servicoItens}><ion-icon name="checkmark-circle-sharp"></ion-icon>Hospedagem</li>
            <li className={servicoItens}><ion-icon name="checkmark-circle-sharp"></ion-icon>Site responsívo</li>
            <li className={servicoItens}><ion-icon name="checkmark-circle-sharp"></ion-icon>Redes Sociais</li>
            <li className={servicoItens}><ion-icon name="checkmark-circle-sharp"></ion-icon>Chat online</li>
            <li className={servicoItens}><ion-icon name="checkmark-circle-sharp"></ion-icon>Blog integrado</li>
          </ul>
        </div>
      </section>
      <section className={contatoContainer}>
        <div className={contato}>
          <h1>Nossa equipe está à disposição</h1>
          <input type="text" placeholder="Celular" />
          <button>Ligamos para você</button>
        </div>
        <div className={relatoClientes}>
          <div className={clienteImg}>
            <img src={ClientPicOne} alt="Clientes" />
            <div className={cliente}>
              <p>Já tive experiências com outras 4 empresas da área e a Codar é sem sombra de dúvidas superior em todos os aspectos.</p>
              <h1>Pedro Ferreiro</h1>
              <h2>Construtora Minari</h2>
            </div>
          </div>
          <div className={clienteImg}>
            <img src={ClientPicTwo} alt="Clientes" />
            <div className={cliente}>
              <p>Processos bem simples e criação de um site exatamente como a minha escola queria.</p>
              <h1>Maria Rita</h1>
              <h2>Escola Criança Feliz</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
