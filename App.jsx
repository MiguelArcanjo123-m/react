import React, { useState } from 'react';
import TelaLogin from './TelaLogin';
import TelaChat from './TelaChat';

const App = () => {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [logado, setLogado] = useState(false);

  const handleLogin = (nome) => {
    setNomeUsuario(nome);
    setLogado(true);
  };

  return (
    <div>
      {!logado ? (
        <TelaLogin aoLogar={handleLogin} />
      ) : (
        <TelaChat nomeUsuario={nomeUsuario} />
      )}
    </div>
  );
};

export default App;
