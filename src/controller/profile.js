const path = require('path');
const ProfileModel = require("../models/profile");

const getProfile = async(req, res, next) => {
    try {
        //const [data] = await ProfileModel.getProfileAccount();
        res.redirect('/profile/1')
    } catch (error) {
        res.status(500).render('404', {
            title: 'Eror Page',
            error: error,
        });
    }
}

const getProfileByID = async(req, res, next) => {
    const { UserID } = req.params;
    try {
        const [data] = await ProfileModel.getProfileAccountByID(UserID);
        res.render('profile', {
            title: 'Profile',
            data: data,
        });
    } catch (error) {
        res.status(500).render('404', {
            title: 'Eror Page',
            error: error,
        });

    }

}
const deleteProfile = async(req, res) => {
    const { UserID } = req.params;
    try {
        await ProfileModel.deleteProfile(UserID);
        res.status(200).redirect('/accounts');
    } catch (error) {
        res.status(500).render('404', {
            title: 'Eror Page',
            error: error,
        });
    }
}

const postProfile = async(req, res) => {
    const { body } = req;
    try {
        await ProfileModel.postProfile(body);
        res.status(200).render('account', {
            title: 'Profile',
            data: body,
        });
    } catch (error) {
        res.status(500).render('404', {
            title: 'Eror Page',
            error: error,
        });
    }
}

const putProfile = async(req, res) => {
    const { body } = req;
    const { UserID } = req.params;
    try {
        await ProfileModel.updateProfile(UserID, body);
        res.status(200).json({
            message: 'PUT /profile/:UserID success',
            data: {
                UserID: UserID,
                ...body,
            }
        });
    } catch (error) {
        res.status(500).render('404', {
            title: 'Eror Page',
            error: error,
        });
    }
}


module.exports = {
    getProfile,
    getProfileByID,
    putProfile,
    deleteProfile,
    postProfile,
}