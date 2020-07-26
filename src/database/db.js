//importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//utilizar o bando de dados para as nossas operações
// db.serialize(() => {
//     //com comandos SQL será feito:
//     // 1 Criar umta tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)
//     // 2 inserir dados
//     const query = `
//         INSERT INTO places(
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (
//             ?,?,?,?,?,?,?
//         );
//     `

//     const values = [
//         "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1174&q=80",
//         "Papersider",
//         "Guilherme Gembala Jardim América",
//         "Número 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Resíduos Eletrônicos, Lâmpadas"
//     ]

//     function afterInsertData(err) {
//         if(err) {
//             return console.log(err)
//         }    
    

//         console.log("Cadastrado com sucesso")
//         console.log(this)

//     }

//     db.run(query, values, afterInsertData)

//     // 3 consultar os dados da tabela
//     db.all('SELECT * FROM places', function(err, rows){
//         if(err) {
//             return console.log(err)
//         }

//         console.log("Aqui estão seus registros: ")
//         console.log(rows)
//     })

//    //4 deletar um dado
//     db.run('DELETE FROM places WHERE id = ?', [6], function(err) {
//        if (err) {
//            return console.log(err)
//        }
//        console.log("Registro deletado com sucesso")
//     })
// })