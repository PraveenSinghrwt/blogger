const express = require('express');
const app = express();
const port = 5000;

const cookieParser = require('cookie-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/BlogApp');

app.use(cookieParser())
app.use(express.json())
app.use(express.static('public'))



const login = require('./Routes/login');
const signup = require('./Routes/signup');
const logout = require('./Routes/logout');
const createBlog = require('./Routes/createBlog');
const fetchUserBlog = require('./Routes/fetchUserBlog');
const fetchBlogs = require('./Routes/fetchBlog');
const deleteBlog = require('./Routes/deleteBlog');


app.use('/login', login);
app.use('/signup', signup);
app.use('/logout', logout);
app.use('/createBlog', createBlog);
app.use('/fetchUserBlog', fetchUserBlog);
app.use('/fetchBlogs', fetchBlogs);
app.use('/deleteBlog', deleteBlog);


app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})