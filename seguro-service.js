const SEGUROS = require('./in-memory-db');

exports.TESTE = [];

exports.salvarSeguro = (req, res) => {
    const seguro = req.body;

    console.log(req.body);

    this.TESTE.push(seguro);
    console.log('Seguro adicionado', seguro);

    res.status(200).json({message: 'Seguro adicionado com sucesso!'});
}

exports.listarSeguros = (req, res) => {
    res.status(200).json(this.TESTE);
}