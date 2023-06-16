const express = require('express');
const accountRoutes = require('./routes/accounts');
const uploadRoutes = require('./routes/upload');
const landingRoutes = require('./routes/landing');
const profileRoutes = require('./routes/profile');
const mailboxRoutes = require('./routes/mailbox');
const middlewareLogRequests = require('./middleware/logs.js')
const path = require('path');
//const upload = require('./middleware/multer.js');
//COBA ULANG DARI DATABASE 1:07:10
const app = express();
//=======================================================
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//=======================================================
app.use(middlewareLogRequests);
app.use(express.json());
app.use('assets', express.static('public/images'));
//=======================================================
app.use('/', landingRoutes);
app.use('/accounts', accountRoutes);
app.use('/upload', uploadRoutes);
app.use('/profile', profileRoutes);
app.use('/mailbox', mailboxRoutes);
app.use('/help', (req, res) => {
    res.render('input', {
        title: 'Help',
    });
});
app.use(function(req, res, next) {
    res.status(404).render('404', { title: 'Page Not Found' });
});
//=======================================================

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});