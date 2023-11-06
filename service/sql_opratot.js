const db = require('./db_config');


// دریافت لیست کامل کاربران
exports.getUsers = () =>{
    db.query(`SELECT * FROM users`,(error, results, fields) => {
        if(error) throw error;
        console.log(results);
    });
}

// دریافت کاربر بر اساس ایدی
exports.getUserById = (userId) =>{
    db.query(`SELECT * FROM users WHERE id = ?`,[userId],(error, results, fields) => {
        if(error) throw error;
        console.log(results);
    })
}

//آپدیت نام کاربر
exports.updateUserFullName = (userId,newFullName) =>{
    db.query(`UPDATE users SET full_name = ? WHERE id = ?`,[newFullName,userId],(error, results , fields) => {
        if(error) throw error;
        console.log(results);
    })
}

// حذف کاربر
exports.deleteUser = (userId) => {
    db.query(`DELETE FROM user WHERE id = ?`,[userId],(error, results, fields) => {
        if(error) throw error;
        console.log(results);
    });
}

//اضافه کردن کاربر جدید
exports.insertNewUser = (newUser) => {
    db.query(`INSERT INTO users SET = ?`,newUser,(error , results , fields) => {
        if(error) throw error;
        console.log(results);
    });
}