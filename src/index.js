const express = require('express');
const accountRoutes = require('./routes/accounts');
const middlewareLogRequests = require('./middleware/logs.js')
    //COBA ULANG DARI DATABASE 1:07:10
const app = express();
//=======================================================
app.use(middlewareLogRequests);
app.use(express.json());
//=======================================================
app.use('/accounts', accountRoutes);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});