const koneksi = require('../config/database');

const getAccounts = () => {
    const SQLQuery = `SELECT * FROM account`;
    return koneksi.promise().query(SQLQuery);
}
const getAccountsByID = (UserID) => {
    const SQLQuery = `SELECT * FROM account WHERE UserID = ${UserID}`;
    return koneksi.promise().query(SQLQuery);
}
const createAccounts = (body) => {
    const SQLQuery = `  INSERT INTO account (UserID, Fullname, Email, Username, Pass, DOB, IDCard, Sess) 
                        VALUES (${body.UserID},'${body.Fullname}', '${body.Email}', '${body.Username}', '${body.Pass}', DATE '${body.DOB}', '${body.IDCard}', '${body.Sess}') `;
    //const SQLQuery = `  INSERT INTO account (Fullname, Email, Username, Pass, DOB, IDCard, Sess) 
    //                    VALUES ('Farel', 'farel@gmail.com', 'FAREL', 'FAREL', DATE '2015-12-17', '0', '0') `;
    //const SQLQuery = `  INSERT INTO account (UserID, Fullname, Email, Username, Pass, DOB, IDCard, Sess) 
    //                    VALUES (?,?,?,?,?,?,?,?) `;
    return koneksi.promise().query(SQLQuery);
}
const updateAccounts = (body, UserID) => {
    const SQLQuery = `  UPDATE account SET Fullname = '${body.Fullname}', Email = '${body.Email}', Username = '${body.Username}', Pass = '${body.Pass}', DOB = DATE'${body.DOB}', IDCard = '${body.IDCard}' 
                            WHERE UserID = ${UserID} `;

    return koneksi.promise().query(SQLQuery);
}
const deleteAccounts = (UserID) => {
    const SQLQuery = `  DELETE FROM account WHERE UserID = ${UserID} `;
    return koneksi.promise().query(SQLQuery);
}


module.exports = {
    getAccounts,
    createAccounts,
    updateAccounts,
    deleteAccounts,
    getAccountsByID,
}