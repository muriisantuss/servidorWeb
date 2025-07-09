import dotenv from 'dotenv';
import express from "express";
import { Pool } from 'pg'

dotenv.config()

const app = express();
const port = 3000;

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

app.get('/', async (_req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`Servidor rodando! PostgreSQL diz: ${result.rows[0].now}`)
  } catch (error) {
    console.error('Error ao conectar ao banco: ', error);
    res.status(500).send('Erro ao conectar ao banco')
  }
});

app.listen(port,  () => {
  console.log(`Servidor ouvindo em http://localhost:${port}`);
});


