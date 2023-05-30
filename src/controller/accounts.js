const { put } = require("../routes/accounts");

const getAccounts = (req, res, next) => {
    res.json({
        message: 'GET /accounts success',
    })
}

const postAccounts = (req, res, next) => {
    console.log(req.body);
    res.json({
        message: 'POST /accounts success',
        data: req.body
    });
}

const putAccounts = (req, res, next) => {
    const { UserID } = req.params;
    console.log('UserID:', UserID);
    res.json({
        message: 'PUT /accounts success',
        data: req.body,
    });
}

const deleteAccounts = (req, res, next) => {
    const { UserID } = req.params;
    res.json({
        message: 'DELETE /accounts success',
        data: {
            UserID: UserID,
            Name: "John Doe",
            Age: "30",
            Job: "Web Developer",
            Email: "dwanmand@gmail.com"
        }
    });
}

module.exports = {
    getAccounts,
    postAccounts,
    putAccounts,
    deleteAccounts
}