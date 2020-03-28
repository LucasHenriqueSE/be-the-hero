/**
 * Aplicação back-end em NodeJS
 *  
 * Módulo do Express
 * 
 * */
const express = require('express');
// import express from 'express'; // ES6 import module

const cors = require('cors');

/** Arquivo de rotas importado */
const routes = require('./routes')

/** Instância da aplicação */
const app = express();

/** Módulo de segurança (Restringir acesso) */
app.use(cors());
/** Configura o express para converter o corpo da requisição para JSON */
app.use(express.json());
app.use(routes);


/* Configura a porta na qual a aplicação será acessada */
app.listen(3333);