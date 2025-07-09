const express = require ('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Olá, Muri! Servidor rodando com Docker!');
});

app.listen(port, () => {
  console.log(`Servidor ouvindo em http://localhost:${port}`);
});


