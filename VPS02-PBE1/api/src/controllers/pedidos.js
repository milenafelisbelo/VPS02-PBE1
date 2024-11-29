const con = require('../connect');
const create = (req, res) => {
    const {idcliente, idprod, idtelefone, datalancamento,total} = req.body;
    con.query('INSERT INTO pedidos (idcliente, idprod, idtelefone, datalancamento, total) VALUES (?, ?, ?, ?, ?)',
        [idcliente, idprod, idtelefone, datalancamento,total],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(201).json({ id: result.insertId,idcliente, idprod, idtelefone, datalancamento,total});
        });
}
const read = (req, res) => {
    con.query('SELECT * FROM pedidos', 
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(200).json(result);
        }
    );
}

const update = (req, res) => {
    let idcliente = req.body.idcliente;
    let idprod = req.body.idprod;
    let idtelefone = req.body.idtelefone;
    let datalancamento = req.body.datalancamento;
    let total = req.body.total;

    let query = `UPDATE pedidos SET idcliente ='${idcliente}', idprod = '${idprod}', idtelefone = '${idtelefone}', datalancamento = '${datalancamento}', total = '${total}'`
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })

}


const deletar = (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM pedidos WHERE idpedido = ?';
    con.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

module.exports = { 
    create,
    read, 
    update, 
    deletar 
};