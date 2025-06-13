import React, { useState } from 'react';

const TelaChat = ({ nomeUsuario }) => {
  const [mensagem, setMensagem] = useState('');
  const [listaMensagens, setListaMensagens] = useState([]);

  const enviarMensagem = () => {
    if (mensagem.trim() !== '') {
      const novaMensagem = { remetente: nomeUsuario, texto: mensagem };
      setListaMensagens([...listaMensagens, novaMensagem]);
      setMensagem('');
    }
  };

  return (
    <div>
      <h2>Bem-vindo, {nomeUsuario}!</h2>
      <div>
        {listaMensagens.map((msg, index) => (
          <div key={index}>
            <strong>{msg.remetente}:</strong> {msg.texto}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
      />
      <button onClick={enviarMensagem}>Enviar</button>
    </div>
  );
};

export default TelaChat;
