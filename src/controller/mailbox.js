const MailboxModel = require('../models/mailbox');
const path = require('path');

const getMailbox = async(req, res, next) => {
    try {
        const [data] = await MailboxModel.getMailbox();
        res.render('mailbox', {
            title: 'Mailbox Page',
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
module.exports = {
    getMailbox,
}