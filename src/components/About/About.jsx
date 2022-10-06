import React from 'react';
import ProfilePic from '../../assets/img/profile.jpg';
import styles from './About.module.css';
const {
  initHead,
  autor,
  typeTitulo,
  aboutText,
  aboutContent,
  socialFoot,
} = styles;

export const About = () => {

  React.useEffect(() => {
    const authorName = document.getElementById("typeTitulo");
    typeWritter(authorName)
  }, []);

  const typeWritter = (item) => {
    const stringArray = item.innerHTML.split("");
    item.innerHTML = "";
    stringArray.forEach((letra, i) => {
      setTimeout(() => {
        item.innerHTML += letra;
      }, 100 * i);
    });
  };

  return (
    <>
      <header className={initHead}>
        <div className={autor}>
          <img src={ProfilePic} alt="Code Page Owner" />
          <h1 className={typeTitulo} id="typeTitulo">Nícolas Galdino Esmael</h1>
        </div>
      </header>
      <section className={aboutText}>
        <div className={aboutContent}>
          <h2>Sobre</h2>
          <p>Nícolas Galdino é um estudante de Análise e Desenvolvimento de sistemas, completamente louco pelo Flamengo, adorador de um bom churrasco, genuíno amante de pagode e exíminio apaixonado por tecnologia. Filho de um mecânico de biclicetas e uma dona de casa, seu primeiro contato com a tecnologia se deu aos 9 anos de idade, quando sua tia o convenceu a usar um computador pela prmeira vez. Seus primeiros hobbies foram colecionar miniaturas, bonecos de ação e carrinhos. Não se engane apesar de hoje atuar como desenvolvedor, ele só descobriu essa paixão após seus 17 anos.</p>
          <p>Fã de animes, e musculação (apesar de ser meio gordinho), Nícolas cursou o ensino médio normal, no então Colégio Millenium de Mauá (Metta), tendo se formado em 2015. Sempre com três objetivos de carreira em mente, ser tornar militar, entrar para a área da saúde e por fim atuar na área da tecnologia.</p>
          <p>Foi quando em 2016 ele iniciou sua preparação para o alistamento militar a fim de ter essa experiência e saber se de fato esse seria o rumo a ser seguido. Em 2017 entrou para a Força Aérea Brasileira, servindo na primeira turma de 2017, idientificado como recruta 441. Apesar de ter sido um ano mágico e com experiências incríveis, ele percebeu que seu futuro não estava no militarismo.</p>
          <p>No início de 2018, após completar um ano de serviço obrigatório decidiu sair e com o dinheiro que havia guardado, se matriculou no curso técnico de enfermagem em março daquele ano, no colégio Freinet, já em abril do ano seguinte formou-se técnico, em junho começou a atuar como voluntário, a fim de adquirir experiência e se tornar um profisisonal mais capacitado. Foram 5 meses atuando na Emergência 24 horas de Mauá.</p>
          <p>Foi quando recebeu uma oportunidade para atuar como cuidador na empresa Keep Home, sua carreira de fato começou. Atuou como cuidador por dois anos e três meses. Tempo que pôde perceber que a área da saúde também não era onde seu futuro o aguardava, sua maior dificuldade estava sendo o apego aos pacientes, e quando os mesmos vinham a óbito isso o abalava demais.</p>
          <p>Durente esses dois anos ele decidiu se matricular na faculdade, iniciando as aulas no dia 16 de agosto de 2021. Sempre com objtivo de conseguir seu primeiro estágio para ter seu primeiro contato com o dia-a-dia o mesmo fez tudo ao seu alcance durante os 6 primeiros meses, mas infelizmente não conseguira nada.</p>
          <p>Foi quando em fevereiro de 2022, buscando por profissionais da área para entrevistá-los e concluir um trabalho da faculdade, e já sem esperança ele conhece alguém que se empenhou a ajudá-lo aconseguir sua tão desejada vaga de estágio. Tendo iniciado seu estágio no dia 4 de abril de 2022 no Ministério Público do Estado do Rio de Janeiro, Nícolas hoje é mais um estudante com grandes expectitavas para o futuro e o coração cheio de alegria.</p>
        </div>
        <ul className={socialFoot}>
          <li>
            <a href="https://twitter.com/galdino_esmael" target="_blank" rel="noreferrer">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li>
            <a href="https://github.com/nicolasgaldino" target="_blank" rel="noreferrer">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nícolas-galdino-esmael-8370ab199" target="_blank" rel="noreferrer">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
        </ul>
      </section>
    </>
  )
}
