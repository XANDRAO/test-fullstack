const Cliente = require('../models/cliente');

exports.listarClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar clientes' });
  }
};

exports.criarCliente = async (req, res) => {
  try {
    const { nome, email, telefone, cpf, status } = req.body;
    const novoCliente = await Cliente.create({ nome, email, telefone, cpf, status });
    res.json(novoCliente);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar cliente' });
  }
};

exports.atualizarCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email, telefone, cpf, status } = req.body;
    await Cliente.update({ nome, email, telefone, cpf, status }, { where: { id } });
    res.json({ message: 'Cliente atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar cliente' });
  }
};
