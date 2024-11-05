import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const ListagemClientes = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        fetchClientes();
    }, []);

    const fetchClientes = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/clientes');
            const data = await response.json();

            if (Array.isArray(data)) {
                setClientes(data);
            } else {
                throw new Error('Os dados recebidos não são um array');
            }
        } catch (error) {
            console.error('Erro ao buscar clientes:', error);
        }
    };

    const tratarStatus = (status) => {
        if (!status) return 'Desconhecido';
        return status.charAt(0).toUpperCase() + status.slice(1);
    };

    const obterClasseStatus = (status) => {
        const classes = {
            ativo: 'status-ativo',
            inativo: 'status-inativo',
            aguardando: 'status-aguardando',
            desativado: 'status-desativado',
        };
        return classes[status] || 'status-desconhecido';
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h6>Listagem de usuários</h6>
                    <p className="mb-0">Escolha um cliente para visualizar os detalhes</p>
                </div>
                <Link to="/novo" className="btn btn-warning">Novo Cliente</Link>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>CPF</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.length === 0 ? (
                        <tr>
                            <td colSpan="6">Nenhum cliente encontrado.</td>
                        </tr>
                    ) : (
                        clientes.map(cliente => (
                            <tr key={cliente.id}>
                                <td>{cliente.nome}</td>
                                <td>{cliente.email}</td>
                                <td>{cliente.telefone}</td>
                                <td>{cliente.cpf}</td>
                                <td>
                                    <span className={`status-bolinha ${obterClasseStatus(cliente.status)}`}></span>
                                    {tratarStatus(cliente.status)}
                                </td>
                                <td>
                                    <Link to={`/editar/${cliente.id}`} className="btn btn-warning">Editar</Link>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ListagemClientes;
