import React, { useState } from 'react';
import { api } from '../../services/api';

import { Container } from './styles';

function Promotions() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameErrorForm, setNameErrorForm] = useState("");
  const [emailErrorForm, setEmailErrorForm] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    if (name.length < 4) {
      setNameErrorForm("Digite um nome válido");
      return
    } else {
      setNameErrorForm("");
    }

    if (!email.includes('@')) {
      setEmailErrorForm('Digite um email válido');
      return
    } else {
      setEmailErrorForm("");
    }

    const body = {
      name,
      email
    }
    const response = await api.post('/newsletter', body);
    console.log(response)
  }

  return (
    <Container>
      <h1>Participe de nossas news com promoções e novidades!</h1>
      <form onSubmit={handleSubmit} action="">
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Digite seu nome"
          type="text" />
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Digite seu email"
          type="text" />
        <button>Eu quero!</button>
      </form>
      {nameErrorForm ? (
        <p>{nameErrorForm}</p>
      ) : emailErrorForm ? (
        <p>{emailErrorForm}</p>
      ) : (
        <p style={{ color: '#BDBDBD' }}> - </p>
      )}

    </Container>
  );
}

export default Promotions;