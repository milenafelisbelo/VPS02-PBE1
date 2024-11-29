const con = require('../connect');
const create = (req, res) => {
    const {nome, pagamento} = req.body;
    con.query('INSERT INTO clientes (nome, pagamento) VALUES (?, ?)',
        [nome, pagamento],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(201).json({ id: result.insertId, nome, pagamento});
        });
}

const read = (req, res) => {
    con.query('SELECT * FROM clientes', 
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(200).json(result);
        }
    );
}

const update = (req, res) => {
    let nome = req.body.nome;
    let pagamento = req.body.pagamento;

    let query = `UPDATE clientes SET nome ='${nome}', pagamento = '${pagamento}'`
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
    const query = 'DELETE FROM clientes WHERE idcliente = ?';
    con.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

module.exports = { create, read, update, deletar };