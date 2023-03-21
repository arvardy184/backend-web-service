const express = require('express');

require('dotenv').config();
const PORT = process.env.PORT || 5000;
const usersRoutes =  require('./routes/users.js');

const middlewareLogRequest = require('./middleware/logs.js');

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());
app.use('/assets',express.static('public/images'));

app.use('/users', usersRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})