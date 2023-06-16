const AccountModel = require("../models/accounts");
const ProfileModel = require("../models/profile");
const path = require('path');

const getAccounts = async(req, res, next) => {
    try {
        const [data] = await ProfileModel.getProfileAccount();
        res.render('account', {
            title: 'Accounts Page',
            isLogin: true,
            data: data,
        });
    } catch (error) {
        res.status(500).render('404', {
            title: 'Error Page',
            isLogin: true,
            error: error,
        });
    }

}

const getAccountsByID = async(req, res, next) => {
    const { UserID } = req.params;
    try {
        const [data] = await AccountModel.getAccountsByID(UserID);

        // Check if data is not empty
        if (data.length > 0) {
            res.render('accounts', {
                title: 'Account Page',
                isLogin: true,
                data: data,
                account: req.session.account,
            });
            //res.sendFile(path.join(__dirname + '/../views/account.html'), { data });
            //res.json(data[0]);
            //    message: 'GET /accounts/:UserID success',
            //    data: data[0],
            //});
        } else {
            res.status(404).render('/404')
        }
    } catch (error) {
        res.status(500).json({
            message: 'GET /accounts/:UserID failed',
            ServerMessage: error,
        });
    }
}


const postAccounts = async(req, res) => {
    const { body } = req;

    if (!body.Username || !body.Pass) {
        return res.status(400).render('404', {
            title: 'Error Page',
            isLogin: true,
            error: 'Fullname, Email, Username, Pass, DOB are required',
        });
    }

    try {
        await AccountModel.createAccounts(body);
        res.status(201).json({
            message: 'POST /accounts success',
            data: body,
        });
    } catch (error) {
        res.status(500).json({
            message: 'POST /accounts failed',
            ServerMessage: error,
        });
    }

}

const putAccounts = async(req, res, next) => {
    const { UserID } = req.params;
    const { body } = req;
    try {
        await AccountModel.updateAccounts(body, UserID);
        res.json({
            message: 'PUT /accounts success',
            data: {
                UserID: UserID,
                ...body,
            }
        });
    } catch (error) {
        res.status(500).json({
            message: 'PUT /accounts failed',
            ServerMessage: error,
        });
    }

}

const deleteAccounts = async(req, res, next) => {
    const { UserID } = req.params;
    try {
        await AccountModel.deleteAccounts(UserID);
        res.json({
            message: 'DELETE /accounts success',
            data: null,
        });
    } catch (error) {
        res.status(500).json({
            message: 'DELETE /accounts failed',
            ServerMessage: error,
        });
    }
}

module.exports = {
    getAccounts,
    postAccounts,
    putAccounts,
    deleteAccounts,
    getAccountsByID,
}