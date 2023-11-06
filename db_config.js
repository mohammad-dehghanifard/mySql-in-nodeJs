const mysql = require('mysql');

const connection = mysql.createConnection(
    {
        host: process.env.Host,
        user: process.env.Sql_Username,
        password: '',
        port: process.env.Sql_Port,
        database: process.env.Sql_Name,
    }
);

connection.connect(err =>{
    if(err){
        console.log("Error:", err);
        return;
    }
    console.log("Connection established");
});