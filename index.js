const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { salvarSeguro, listarSeguros} = require('./seguro-service');
const { listarMarcas } = require('./marca-service');

 
app.use(bodyParser.json());
app.use(cors({origin:true, credentials:true}));

app.route('/api/seguros').post(salvarSeguro);
app.route('/api/seguros').get(listarSeguros);
app.route('/api/marcas').get(listarMarcas);

const HOST = 'localhost';
const PORT = 9000;

app.listen(PORT, HOST, () => {
    console.log(`Servidor rodando em http://${HOST}:${PORT}`);
});