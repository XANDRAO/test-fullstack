import React from 'react';

const ClienteCard = ({ cliente }) => (
  <div className="cliente-card">
    <p><strong>Nome:</strong> {cliente.nome}</p>
    <p><strong>Email:</strong> {cliente.email}</p>
    <p><strong>Telefone:</strong> {cliente.telefone}</p>
    <p><strong>CPF:</strong> {cliente.cpf}</p>
    <p>
      <strong>Status:</strong>
      <span className={`status-${cliente.status}`}>{cliente.status}</span>
    </p>
    <button
      className="button button-laranja"
      onClick={() => window.location.href = `/editar/${cliente.id}`}
    >
      Editar
    </button>
  </div>
);

export default ClienteCard;
