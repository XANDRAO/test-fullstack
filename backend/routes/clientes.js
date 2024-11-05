const express = require('express');
const router = express.Router();
const Cliente = require('../models/cliente'); 

// Rota para criar um novo cliente
router.post('/', async (req, res) => {
    try {
        const { nome, email, telefone, cpf, status } = req.body; 
        const novoCliente = await Cliente.create({ nome, email, telefone, cpf, status });
        res.status(201).json(novoCliente);
    } catch (error) {
        console.error("Erro ao criar cliente:", error);
        res.status(500).json({ message: "Erro ao criar cliente" });
    }
});

module.exports = router;

// Rota para obter todos os clientes
router.get('/', async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        console.log("Clientes retornados:", clientes); // Log para verificar dados
        res.status(200).json(clientes);
    } catch (error) {
        console.error("Erro ao buscar clientes:", error);
        res.status(500).json({ message: "Erro ao buscar clientes" });
    }
});


// Rota para obter um cliente por ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const cliente = await Cliente.findByPk(id);
        if (cliente) {
            res.status(200).json(cliente);
        } else {
            res.status(404).json({ message: "Cliente não encontrado" });
        }
    } catch (error) {
        console.error("Erro ao buscar cliente:", error);
        res.status(500).json({ message: "Erro ao buscar cliente" });
    }
});

// Rota para editar um cliente
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, email, telefone, cpf, status } = req.body;
    try {
        const cliente = await Cliente.findByPk(id);
        if (cliente) {
            cliente.nome = nome;
            cliente.email = email;
            cliente.telefone = telefone;
            cliente.cpf = cpf;
            cliente.status = status;
            await cliente.save();
            res.status(200).json(cliente);
        } else {
            res.status(404).json({ message: "Cliente não encontrado" });
        }
    } catch (error) {
        console.error("Erro ao editar cliente:", error);
        res.status(500).json({ message: "Erro ao editar cliente" });
    }
});

module.exports = router;
