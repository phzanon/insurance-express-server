var MARCAS = require('./marcas.json')

exports.listarMarcas = (req, res) => {
    res.status(200).json(MARCAS);
}