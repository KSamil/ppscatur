const koneksi = require('../config/database');

const getMailbox = () => {
    const SQLQuery = `SELECT * FROM report`;
    return koneksi.promise().query(SQLQuery);
}





module.exports = {
    getMailbox,
}