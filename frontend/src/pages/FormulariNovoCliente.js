import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormularioNovoCliente = () => {
    const [cliente, setCliente] = useState({
        nome: '',
        email: '',
        telefone: '',
        cpf: '',
        status: 'ativo',
    });
    const navigate = useNavigate();
    const [erro, setErro] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCliente((prevCliente) => ({ ...prevCliente, [name]: value }));
    };

    const validarCPF = (cpf) => /^\d{11}$/.test(cpf);
    const validarTelefone = (telefone) => /^\d{10,11}$/.test(telefone);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErro('');

        if (!validarCPF(cliente.cpf)) {
            setErro('CPF inválido. Digite 11 números sem pontos ou traços.');
            return;
        }

        if (!validarTelefone(cliente.telefone)) {
            setErro('Telefone inválido. Digite 10 ou 11 números sem espaços ou símbolos.');
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/api/clientes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cliente),
            });
            if (response.ok) {
                navigate('/');
            } else {
                const errorData = await response.json();
                setErro(errorData.message || 'Erro ao criar cliente.');
            }
        } catch (error) {
            console.error('Erro ao criar cliente:', error);
            setErro('Erro ao criar cliente.');
        }
    };

    return (
        <div className="container mt-5">
            <h3>Criar Novo Cliente</h3>
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
                <button type="submit" className="btn btn-warning">Criar Cliente</button>
            </form>
        </div>
    );
};

export default FormularioNovoCliente;
