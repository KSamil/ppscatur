const path = require('path');

const landingPage = (req, res) => {
    res.render('landing', {
        title: 'Landing Page',
        isLogin: false,
    });
}

const editPage = (req, res) => {
    res.render('editprofile', {
        title: 'Edit Profile',
        isLogin: false,
    });
}

const getHelp = (req, res) => {
    res.render('help', {
        title: 'Help',
    });
}

const loginPage = (req, res) => {
    res.render('login', {
        title: 'Login Page',
        isLogin: false,
    });
    //res.sendFile(path.join(__dirname + '/../views/login.html'));
}

module.exports = {
    landingPage,
    loginPage,
    editPage,
    getHelp,
}