const mysql = require('mysql');

const koneksi = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'db_backend',
    port:'3307',
    multipleStatements: true
});

koneksi.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

module.exports = koneksi;