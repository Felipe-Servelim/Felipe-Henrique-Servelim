const express = require('express');
const app = express();
const PORT = 3000;

// Dados dos alunos (pode ser estático para este exemplo)
const alunos = [
  { RA: '123', nome: 'João', email: 'joao@example.com' },
  { RA: '456', nome: 'Maria', email: 'maria@example.com' },
  { RA: '789', nome: 'Pedro', email: 'pedro@example.com' }
];

// Rota para /alunos
app.get('/alunos', (req, res) => {
  res.json(alunos);
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`API está hospedada corretamente na porta ${PORT}`);
});
