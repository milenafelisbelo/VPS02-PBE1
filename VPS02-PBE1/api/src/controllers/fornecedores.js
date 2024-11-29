const con = require('../connect');

const create = (req, res) => {
    const { nome, cnpj, email } = req.body;
    con.query(
        `INSERT INTO fornecedores (nome, cnpj, email) VALUES (?, ?, ?)`,
        [nome, cnpj, email],
        (err, result) => {
            if (err) {
                return res.status(500).json({ mensagem: 'Erro ao cadastrar fornecedor', erro: err.message });
            }
            return res.status(201).json({
                mensagem: 'Fornecedor cadastrado com sucesso',
                idforn: result.insertId,
                nome,
                cnpj,
                email,
            });
        }
    );
};

const read = (req, res) => {
    con.query(
        'SELECT * FROM fornecedores',
        (err, result) => {
            if (err) {
                return res.status(500).json({ mensagem: 'Erro ao buscar fornecedores', erro: err.message });
            }
            return res.status(200).json(result);
        }
    );
};


const update = (req, res) => {
    let nome = req.body.nome;
    let cnpj = req.body.cnpj;
    let email = req.body.email;

    let query = `UPDATE fornecedores SET nome = '${nome}', cnpj = '${cnpj}',email ='${email}' `
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
    const query = 'DELETE FROM fornecedores WHERE idforn = ?';
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