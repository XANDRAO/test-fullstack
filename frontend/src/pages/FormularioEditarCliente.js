import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/styles.css';

const FormularioEditarCliente = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [cliente, setCliente] = useState({
        nome: '',
        email: '',
        telefone: '',
        cpf: '',
        status: 'ativo', // Padrão ao editar
    });
    const [erro, setErro] = useState('');

    useEffect(() => {
        const fetchCliente = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/clientes/${id}`);
                const data = await response.json();
                if (response.ok) {
                    setCliente(data);
                } else {
                    throw new Error(data.message || 'Cliente não encontrado.');
                }
            } catch (error) {
                console.error('Erro ao buscar cliente:', error);
                setErro('Erro ao buscar cliente.');
            }
        };

        fetchCliente();
    }, [id]); // Aqui 'id' é a única dependência necessária

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCliente((prevCliente) => ({ ...prevCliente, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErro('');

        try {
            const response = await fetch(`http://localhost:3001/api/clientes/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cliente),
            });
            if (response.ok) {
                navigate('/');
            } else {
                const errorData = await response.json();
                setErro(errorData.message || 'Erro ao editar cliente.');
            }
        } catch (error) {
            console.error('Erro ao editar cliente:', error);
            setErro('Erro ao editar cliente.');
        }
    };

    return (
        <div className="container mt-5">
            <h3>Editar Cliente</h3>
            <form onSubmit={handleSubmit}>
                {erro && <div className="alert alert-danger">{erro}</div>}
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input type="text" id="nome" name="nome" value={cliente.nome} onChange={handleChange} className="form-control" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" name="email" value={cliente.email} onChange={handleChange} className="form-control" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="telefone" className="form-label">Telefone</label>
                    <input type="text" id="telefone" name="telefone" value={cliente.telefone} onChange={handleChange} className="form-control" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpf" className="form-label">CPF</label>
                    <input type="text" id="cpf" name="cpf" value={cliente.cpf} onChange={handleChange} className="form-control" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    <select id="status" name="status" value={cliente.status} onChange={handleChange} className="form-select" required>
                        <option value="ativo">Ativo</option>
                        <option value="inativo">Inativo</option>
                        <option value="aguardando">Aguardando</option>
                        <option value="desativado">Desativado</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-warning">Salvar Alterações</button>
            </form>
        </div>
    );
};

export default FormularioEditarCliente;
