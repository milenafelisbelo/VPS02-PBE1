const con = require('../connect');

const create = (req, res) => {
    const { numero, idcliente, idforn } = req.body;
    con.query(
        `INSERT INTO telefone (numero, idcliente, idforn) VALUES (?, ?, ?)`,
        [numero, idcliente, idforn],
        (err, result) => {
            if (err) {
                return res.status(500).json({ mensagem: 'Erro ao cadastrar telefone', erro: err.message });
            }
            return res.status(201).json({
                mensagem: 'Telefone cadastrado com sucesso',
                idtelefone: result.insertId,
                numero,
                idcliente,
                idforn,
            });
        }
    );
};

const read = (req, res) => {
    con.query(
        'SELECT * FROM telefone',
        (err, result) => {
            if (err) {
                return res.status(500).json({ mensagem: 'Erro ao buscar telefones', erro: err.message });
            }
            return res.status(200).json(result);
        }
    );
};

const update = (req, res) => {
    const { idtelefone } = req.params;
    const { numero, idcliente, idforn } = req.body;
    const query = `UPDATE telefone 
                   SET numero = ?, idcliente = ?, idforn = ? 
                   WHERE idtelefone = ?`;
    con.query(
        query,
        [numero, idcliente, idforn, idtelefone],
        (err, result) => {
            if (err) {
                return res.status(500).json({ mensagem: 'Erro ao atualizar telefone', erro: err.message });
            }
            if (result.affectedRows) {
                return res.status(404).json({ mensagem: 'Telefone não encontrado' });
            }
            return res.status(200).json({ mensagem: 'Telefone atualizado com sucesso' });
        }
    );
};

const deletar = (req, res) => {
    const { idtelefone } = req.params;
    const query = `DELETE FROM telefone WHERE idtelefone = ?`;
    con.query(
        query,
        [idtelefone],
        (err, result) => {
            if (err) {
                return res.status(500).json({ mensagem: 'Erro ao deletar telefone', erro: err.message });
            }
            if (result.affectedRows) {
                return res.status(404).json({ mensagem: 'Telefone não encontrado' });
            }
            return res.status(200).json({ mensagem: 'Telefone deletado com sucesso' });
        }
    );
};

module.exports = { 
    create, 
    read, 
    update, 
    deletar 
};