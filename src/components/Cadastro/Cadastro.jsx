import React from 'react';
import styles from './Cadastro.module.css';
const {
  cadForm,
  todosForm,
  formularioUser,
  formularioEndereco,
  cadBtn,
} = styles;

export const Cadastro = () => {

  React.useEffect(() => {
    const userCep = document.getElementById('cep');
    const clearFormCad = (endereco) => {
      document.getElementById('nome').value = '';
      document.getElementById('email').value = '';
      document.getElementById('senha').value = '';
      document.getElementById('cep').value = '';
      document.getElementById('endereco').value = '';
      document.getElementById('bairro').value = '';
      document.getElementById('cidade').value = '';
      document.getElementById('estado').value = '';
    }
    const clearForm = (endereco) => {
      document.getElementById('endereco').value = '';
      document.getElementById('bairro').value = '';
      document.getElementById('cidade').value = '';
      document.getElementById('estado').value = '';
    }
    const fillForm = (endereco) => {
      document.getElementById('endereco').value = endereco.logradouro;
      document.getElementById('bairro').value = endereco.bairro;
      document.getElementById('cidade').value = endereco.localidade;
      document.getElementById('estado').value = endereco.uf;
    }
    const eNumero = (numero) => /^[0-9]+$/.test(numero);
    const cepValido = (cep) => cep.length === 8 && eNumero(cep);
    const pesquisaCep = async () => {
      clearForm();
      const cep = document.getElementById('cep').value;
      const urlCep = `https://viacep.com.br/ws/${cep}/json/`;
      //fetch(urlCep).then(response => response.json()).then(endereco);
      if (cepValido(cep)) {
        const dados = await fetch(urlCep);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')) {
          document.getElementById('endereco').value = 'CEP não encontrado.';
        } else {
          fillForm(endereco);
        }
      } else {
        document.getElementById('endereco').value = 'CEP incorreto.';
      }
    }
    userCep.addEventListener('focusout', pesquisaCep);
    function alertaCadastro() {
      const nameU = document.getElementById('nome').value;
      if (nameU === '') {
        window.alert('Por favor, preencha os campos abaixo.')
      } else {
        const user = document.getElementById('nome').value;
        window.alert(`Obrigado por se cadastrar, ${user}!`);
        clearFormCad();
      }
    }
  }, []);

  return (
    <>
      <form className={cadForm}>
        <div className={todosForm}>
          <p>Cadastro</p>
          <div className={formularioUser}>
            <input type="text" name="name" id="nome" placeholder="Nome" />
            <input type="email" name="email" id="email" placeholder="E-mail" />
            <input type="password" name="email" id="senha" placeholder="Senha" />
          </div>
          <div className={formularioEndereco}>
            <input type="tel" name="cep" id="cep" placeholder="CEP" />
            <input type="text" name="endereco" id="endereco" placeholder="Endereço" />
            <input type="tel" name="numero" id="numero" placeholder="Número" />
          </div>
          <div className={formularioEndereco}>
            <input type="text" name="bairro" id="bairro" placeholder="Bairro" />
            <input type="tel" name="cidade" id="cidade" placeholder="Cidade" />
            <input type="tel" name="estado" id="estado" placeholder="Estado" />
          </div>
          <input type="button" className={cadBtn} id="cadstro" value="Cadastre-se" />
        </div>
      </form>
    </>
  )
}
