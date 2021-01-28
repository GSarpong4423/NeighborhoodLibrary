const express = require ('express');
const mongoose = require('mongoose');
const User =require('./models/User');
const usersRoute = require('./routes/usersRoutes');
require('./config/dbConnect')();

const app = express();

//Passing body data
app.use(express.json());

//ROUTES
app.use('/api/users', usersRoute);

//server
const PORT = process.env.PORT || 5000;

app.listen(PORT,() => {
console.log(`Server is up and running ${PORT}`);
});

// gina
// gina1234;