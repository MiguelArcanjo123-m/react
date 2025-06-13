
import React, { useState } from 'react';

const TelaLogin = ({ aoLogar }) => {
  const [nome, setNome] = useState('');

  const handleClick = () => {
    if (nome.trim() !== '') {
      aoLogar(nome);
    } else {
      alert('Por favor, digite um nome!');
    }
  };

  return (
    <div>
      <h2>Digite seu nome para entrar no chat:</h2>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <button onClick={handleClick}>Entrar</button>
    </div>
  );
};

export default TelaLogin;
