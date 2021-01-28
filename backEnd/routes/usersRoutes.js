const express = require ('express');
const User = require('../models/User');


const usersRoute = express.Router();

//Register
usersRoute.post('/register', async (req, res) => {
    try{
        const{name,email,password} =req.body;
        const user = await User.create({name,email, password});
        console.log(user);

        res.send(user);
    } catch (error){
        console.log(error);
    }
});
//login
usersRoute.post('/login', (req, res) => {
    res.send('Login route');
});
//update user
usersRoute.put('/update', (req, res) => {
    res.send('Update route');
});
//delete
usersRoute.delete('/:id', (req, res) => {
    res.send('Delete route');
});

//fetch Users
usersRoute.get('/', (req, res) => {
    res.send('Fetch Users');
});


module.exports = usersRoute;
