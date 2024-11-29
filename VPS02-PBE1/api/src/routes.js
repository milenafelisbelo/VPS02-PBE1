const express = require('express');
const router = express.Router();

const produto = require('./controllers/produtos');
const pedido = require('./controllers/pedidos');
const cliente = require('./controllers/clientes');
const fornecedor = require('./controllers/fornecedores');
const telefone = require('./controllers/telefones');

router.get('/', (req, res) => {
    res.json({ mensagem: 'API cantina composição executando!' });
});

router.post('/produtos', produto.create);
router.get('/produtos', produto.read);
router.put('/produtos/:id', produto.update);
router.delete('/produtos/:id', produto.deletar);

router.post('/pedidos', pedido.create);
router.get('/pedidos', pedido.read);
router.put('/pedidos/:id', pedido.update);
router.delete('/pedidos/:id', pedido.deletar);

router.post('/clientes', cliente.create);
router.get('/clientes', cliente.read);
router.put('/clientes/:id', cliente.update);
router.delete('/clientes/:id', cliente.deletar);

router.post('/fornecedores', fornecedor.create);
router.get('/fornecedores', fornecedor.read);
router.put('/fornecedores/:id', fornecedor.update);
router.delete('/fornecedores/:id', fornecedor.deletar);

router.post('/telefones', telefone.create);
router.get('/telefones', telefone.read);
router.put('/telefones/:id', telefone.update);
router.delete('/telefones/:id', telefone.deletar);

module.exports = router;