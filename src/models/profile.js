const koneksi = require('../config/database');

//integrate 2 databases
const getProfileAccount = () => {
        const SQLQuery = `SELECT * FROM account, profile WHERE account.UserID = profile.UserID`;
        return koneksi.promise().query(SQLQuery);
    }
    //THIS ONE MUNGKIN BENAR
const getProfileAccountByID = (UserID) => {
    const SQLQuery = `SELECT * FROM account, profile WHERE account.UserID = ${UserID} AND profile.UserID = ${UserID}`;
    return koneksi.promise().query(SQLQuery);
}

const deleteProfile = async(UserID, connection) => {
    const SQLQuery1 = `DELETE FROM account WHERE UserID = ${UserID}`;
    const SQLQuery2 = `DELETE FROM profile WHERE UserID = ${UserID}`;
    return koneksi.promise().query(SQLQuery1, SQLQuery2);
}

const postProfile = async(body, connection) => {
    const SQLQueryAccount = `INSERT INTO account (UserID, Fullname, Email, Username, Pass, DOB, IDCard, Sess) WHERE UserID = ${UserID}`;
    const SQLQueryProfile = `INSERT INTO profile (UserID, NomorPeserta, NIP, Fakultas, Payment) WHERE UserID = ${UserID}`;
    return koneksi.promise().query(SQLQueryAccount, SQLQueryProfile);
}

const updateProfile = async(body, UserID, connection) => {
    const SQLQueryAccount = `UPDATE account 
                             SET Fullname = '${body.Fullname}', 
                                 Email = '${body.Email}', 
                                 Username = '${body.Username}', 
                                 Pass = '${body.Pass}', 
                                 DOB = DATE '${body.DOB}', 
                                 IDCard = '${body.IDCard}' 
                             WHERE UserID = ${UserID}`;

    const SQLQueryProfile = `UPDATE profile 
                             SET NomorPeserta = '${body.NomorPeserta}', 
                                 NIP = '${body.NIP}', 
                                 Fakultas = '${body.Fakultas}', 
                                 Payment = '${body.Payment}' 
                             WHERE UserID = ${UserID}`;

    try {
        await connection.query(SQLQueryAccount);
        await connection.query(SQLQueryProfile);
    } catch (error) {
        console.error(`Failed to update profile: ${error}`);
        throw error;
    }
};

module.exports = {
    getProfileAccount,
    getProfileAccountByID,
    updateProfile,
    deleteProfile,
    postProfile,
}