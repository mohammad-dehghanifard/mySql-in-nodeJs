const mysql = require('mysql');

const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.Sql_Username,
        password: process.env.Sql_Password,
        database: process.env.Sql_Name,
        port: process.env.Sql_Port,
    }
);

connection.connect(err =>{
    if(err){
        console.log("Error:", err);
        return;
    }
    console.log("Connection established");
});