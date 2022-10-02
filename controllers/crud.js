//Invocamos a conexão do DB
const conexao = require('../database/db');
//GUARDAR un REGISTRO
exports.save = (req, res)=>{
    const proprietario = req.body.proprietario;
    const valor = req.body.valor;
    conexao.query(
        'INSERT INTO crud(id, proprietario, valor) VALUES($1, $2, $3)',
        [GeradorID(proprietario, valor), proprietario, valor],
        (error, results) => {
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/');         
        }
});
};

// //Atualizar o registro
exports.update = (req, res)=>{
    const id = req.body.id;
    const proprietario = req.body.proprietario;
    const valor = req.body.valor;
    conexao.query(
        'UPDATE crud SET proprietario=$1, valor=$2, id=$4 WHERE id=$4',
        [proprietario, valor, id],
        (error, results) => {
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
};

function GeradorID(proprietario, valor) {
    return Number(proprietario.toString().length) + Number(valor.toString().length)
}