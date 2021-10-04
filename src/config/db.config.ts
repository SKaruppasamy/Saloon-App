import mysql from 'mysql';


// export class DataBaseConfig {

// public mysqlConfig(callBack: CallableFunction): any {
//     const con = mysql.createConnection({
//         host: 'localhost',
//         user: 'arul',
//         password: 'root',
//         database: 'test'
//     })

//     con.connect((err: any) => {
//         if (err) {
//             console.log('error-------', err)
//         } else {
//             callBack(con)
//         }
//     })
// }

// }


// const App = () => {

//     var mysql = require('mysql');

//     var con = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         password: "root",
//         database: "test"
//     });

//     con.connect(function (err: any) {
//         if (err) throw err;
//         console.log("Connected!");
//         var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//         con.query(sql, function (err: any, result: any) {
//             if (err) throw err;
//             console.log("Table created");
//         });
//     });

// }

// module.exports = { App };

