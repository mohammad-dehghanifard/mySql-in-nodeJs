const mysql = require("mysql2");
require("dotenv").config()

const pool = mysql.createPool({
    host : "localhost",
    user : "root",
    password : "",
    database : "mini_blog"
})


module.exports = pool.promise()