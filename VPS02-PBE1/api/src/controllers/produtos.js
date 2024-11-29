const con = require('../connect');
const create = (req, res) => {
    const {descricao, preco, nome, validade, idforn} = req.body;
    con.query('INSERT INTO produtos (descricao, preco, nome, validade, idforn) VALUES (?, ?, ?, ?, ?)',
        [descricao, preco, nome, validade, idforn],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(201).json({ id: result.insertId,descricao, preco, nome, validade, idforn});
        });
}



const read = (req, res) => {
    con.query('SELECT * FROM produtos',
        (err, result) => {
            if (err) {
                return res.status(500).json({ mensagem: 'Erro ao buscar produtos', erro: err.message });
            }
            return res.status(200).json(result);
        }
    );
};

const update = (req, res) => {
    let descricao = req.body.descricao;
    let preco = req.body.preco;
    let nome = req.body.nome;
    let validade = req.body.validade;
    let idforn = req.body.idforn;

    let query = `UPDATE produtos SET descricao ='${descricao}', preco = '${preco}', nome = '${nome}', validade = '${validade}', idforn = '${idforn}'`
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
    const query = 'DELETE FROM produtos WHERE idprod = ?';
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