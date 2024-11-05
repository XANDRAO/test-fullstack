Gerenciador de Clientes
Visão Geral
Este projeto é um gerenciador de clientes desenvolvido como parte de um teste técnico para uma vaga de desenvolvedor full stack. O aplicativo é construído utilizando React no frontend e Node.js com Express no backend, com um banco de dados MySQL para armazenamento de dados. O sistema permite a criação, edição e visualização de informações de clientes.

Funcionalidades Principais
Usuários Anônimos

Listagem de Clientes:lista de todos os clientes disponíveis na plataforma.
<img src="/frontend/images/listagemuol.png.png" />


Criação de Clientes: é possivel fazer a criação de novos clientes ao sistema.

<img src="/frontend/images/criaruol.png" />

Edição de Clientes: Permite a edição dos dados dos clientes existentes.

<img src="/frontend/images/editaruol.png.png"/>

Validação de Dados: O sistema não permite a criação ou edição de clientes se os campos de CPF ou telefone forem preenchidos incorretamente.
Tecnologias Utilizadas

Frontend:

React: Biblioteca para construção de interfaces de usuário.
Bootstrap 5: Framework CSS utilizado para estilização e layout responsivo.
Poppins: Fonte do Google utilizada para títulos e textos.
Backend:

Node.js: Ambiente de execução JavaScript no lado do servidor.
Express: Framework para Node.js utilizado para construir a API.
MySQL: Sistema de gerenciamento de banco de dados relacional utilizado para armazenar os dados dos clientes.
Requisitos
Node.js: Versão 14 ou superior.
MySQL: Configuração de banco de dados local.
npm: Para gerenciar dependências do projeto.

Instalação
Clone o Repositório

git clone https://github.com/seu-usuario/test-fullstack.git
cd test-fullstack

Configuração do Banco de Dados
Crie um banco de dados MySQL com o nome crud.
Configure a conexão ao banco de dados no arquivo do backend.

Instale as Dependências

Para o backend:
cd backend
npm install

Para o frontend:
cd frontend
npm install

Execute o Servidor
Para iniciar o servidor do backend:
Eu iniciei dessa forma porque na minha maquina da forma tradicional não estava funcionando 

cd backend
node index.js
--> forma normal de iniciar npm start


Para iniciar o servidor do frontend:
Eu iniciei dessa forma porque na minha maquina da forma tradicional não estava funcionando 

cd frontend
npx react-scripts start 
--> forma normal de iniciar npm start

Conclusão
Este gerenciador de clientes é uma aplicação robusta que oferece funcionalidades essenciais para gerenciar informações de clientes de forma eficiente. Ele demonstra o uso de tecnologias modernas e práticas recomendadas em desenvolvimento web.