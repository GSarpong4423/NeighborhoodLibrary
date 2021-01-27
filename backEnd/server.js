const express = require ('express');
const mongoose = require('mongoose');
const app = express();

//connect DB
mongoose.connect('mongodb+srv://Gina:gina5555@cluster0.bchtk.mongodb.net/test', {
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser:true,
})
.then (() => console.log('DB connected'))
.catch(err => console.log(err));


//ROUTES

//user route
app.post('/api/users/register', (req, res) => {
    res.send('Register route');
});

//login
app.post('/api/users/login', (req, res) => {
    res.send('Login route');
});

//update user
app.put('/api/users/update', (req, res) => {
    res.send('Update route');
});

//delete
app.delete('/api/users/:id', (req, res) => {
    res.send('Delete route');
});

//fetch Users
app.get('/api/users', (req, res) => {
    res.send('Fetch Users');
});

//server
const PORT = process.env.PORT || 5000;

app.listen(PORT,() => {
console.log(`Server is up and running ${PORT}`);
});

// gina
// gina1234;