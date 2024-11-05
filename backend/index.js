const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const clientesRoutes = require('./routes/clientes');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use('/api/clientes', clientesRoutes);

sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Backend rodando na porta ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Erro ao sincronizar com o banco de dados:', error);
    });
