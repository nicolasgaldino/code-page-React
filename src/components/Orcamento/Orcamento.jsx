import React from 'react';
import styles from './Orcamento.module.css';
const {
  formContainer,
  todosForm,
  formulario,
  submitBtn,
} = styles;

export const Orcamento = () => {
  return (
    <>
      <form className={formContainer}>
        <div className={todosForm}>
          <p>Preencha o formulário para que possamos entrar em contato!</p>
          <div className={formulario}>
            <label for="name"></label>
            <input type="text" name="name" placeholder="Digite seu nome" required />
          </div>
          <div className={formulario}>
            <label for="email"></label>
            <input type="email" name="email" placeholder="Digite seu e-mail" required />
          </div>
          <div className={formulario}>
            <label for="phone"></label>
            <input type="text" name="phone" placeholder="Telefone para contato" required />
          </div>
          <div className={formulario}>
            <label for="interest">Interesse</label>
            <select name="interest">
              <option value="" disabled selected>Selecione</option>
              <option value="empresarial">Empresarial</option>
              <option value="pequenoPorte">Para pequenos comércios</option>
              <option value="sitePessoal">Site Pessoal</option>
              <option value="lojaVirtual">Loja Virtual</option>
            </select>
          </div>
          <input type="submit" className={submitBtn} value="Quero um site incrível!" />
        </div>
      </form>
    </>
  )
}
