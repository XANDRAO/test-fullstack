const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const clienteRoutes = require('./routes/clientes'); // Importando as rotas de clientes
const app = express();
const port = 3001;

// Configuração do banco de dados
const sequelize = new Sequelize('crud', 'root', 'alexandre!12', {
    host: 'localhost',
    dialect: 'mysql',
});

// Middleware
app.use(cors()); // Habilitar CORS para o frontend
app.use(express.json()); // Para analisar o corpo JSON das requisições

// Rota principal
app.use('/api/clientes', clienteRoutes);

// Testar a conexão com o banco de dados
sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso.');

        // Iniciar o servidor apenas após a conexão com o banco de dados
        app.listen(port, () => {
            console.log(`Servidor rodando em http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.error('Não foi possível conectar ao banco de dados:', err);
    });
