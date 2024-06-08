const express = require('express');
const app = express();
const PORT = 3000;

// Dados dos alunos
const alunos = [
  { RA: '1050292321018', nome: 'Felipe', email: 'felipe@fatec.gov.sp' },
  { RA: '1050292321019', nome: 'Alisson', email: 'alisson@fatec.gov.sp' },
  { RA: '1050292321020', nome: 'Pedro', email: 'pedo@fatec.gov.sp' }
];

// Rota para /alunos
app.get('/alunos', (req, res) => {
  res.json(alunos);
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`API está hospedada corretamente na porta ${PORT}`);
});
