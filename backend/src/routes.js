const express = require('express');
const IncidentController = require('./controllers/IncidentController');
const OngController = require('./controllers/OngController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.get('/', (req, res) => {
    return res.send('Hello Bichaa!');
});

routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

routes.post('/session', SessionController.create);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;