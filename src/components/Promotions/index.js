import React, { useState } from 'react';

import { api } from '../../services/api';
import { Container } from './styles';

function Promotions() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameErrorForm, setNameErrorForm] = useState("");
  const [emailErrorForm, setEmailErrorForm] = useState("");

  async function handleSubmit(event) {
    var pattern = new RegExp(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,})+$/);
    event.preventDefault();

    setNameErrorForm(name.length < 4 ? "Digite um nome válido" : "");

    setEmailErrorForm(!pattern.test(email) ? "Digite um email válido" : "")

    const body = {
      name,
      email
    }
    await api.post('/newsletter', body);
    setName("");
    setEmail("");
  }

  return (
    <Container>
      <h1>Participe de nossas news com promoções e novidades!</h1>
      <form onSubmit={handleSubmit} action="">
        <div>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Digite seu nome"
            type="text" />
          {nameErrorForm && <p className="error">{nameErrorForm}</p>}
        </div>
        <div>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Digite seu email"
            type="text" />
          {emailErrorForm && <p className="error">{emailErrorForm}</p>}
        </div>
        <button>Eu quero!</button>
      </form>
    </Container>
  );
}

export default Promotions;