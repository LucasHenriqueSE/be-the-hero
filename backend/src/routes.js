const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

/** Pacote de criptografia do Node */
const crypto = require('crypto');

const connection = require('./database/connection');

/** Módulo de rotas do Express */
const routes = express.Router();


/** 
 * Configura a rota de acesso da aplicação (app)
 * 
 * Recebe o caminho como primeiro parâmetro e uma 
 * função como segundo parâmetro
 * 
 * */
routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

/** Exporta a variável 'routes' */
module.exports = routes;