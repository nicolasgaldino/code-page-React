import React from 'react';
import styles from './Login.module.css';
const {
  login,
  mainPage,
  loginContainer,
  input,
  email,
  password,
  remember,
  lembrar,
  check,
  btnLogin,
  entrar,
  preferences,
  socialLogin,
} = styles;

export const Login = () => {
  return (
    <>
      <section className={login}>
        <div className={mainPage}>
          <div className={loginContainer}>
            <h1>Codar<span>.</span></h1>
            <div className={input}>
              <input type="text" name="login" className={email} id="nomEmail" placeholder="E-mail ou nome de usuário" required />
              <input type="password" name="pass" className={password} id="passW" placeholder="Senha" required />
            </div>
            <div className={remember}>
              <p className={lembrar} id="lembrar">Lembrar de mim</p>
              <input type="radio" className={check} />
            </div>
            <div className={btnLogin}>
              <input type="button" value="Entrar" className={entrar} id="entrar" />
            </div>
            <div className={preferences}>
              <p>Ou se preferir entre com:</p>
            </div>
            <div className={socialLogin}>
              <ion-icon name="logo-facebook"></ion-icon>
              <ion-icon name="logo-google"></ion-icon>
              <ion-icon name="logo-linkedin"></ion-icon>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
