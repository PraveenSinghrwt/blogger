const express = require('express');
const app = express();
const port = 5000;

const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');


const cors = require('cors');
app.use(cors(
    {
        origin: ["https://blogger-server-nine.vercel.app/"],
        methods: ["POST", "GET"],
        credentials: true
    }
))

const DB = 'mongodb+srv://praveensinghrawat46:KsmwtchxT5g0jueA@cluster0.uewpwtk.mongodb.net/BlogApp?retryWrites=true&w=majority'
mongoose.connect(DB).then(() => {
    console.log('connection successful')
}).catch((error) => console.log('no connection: ', error))

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
const { db } = require('./models/User');


app.use('/login', login);
app.use('/signup', signup);
app.use('/logout', logout);
app.use('/createBlog', createBlog);
app.use('/fetchUserBlog', fetchUserBlog);
app.use('/fetchBlogs', fetchBlogs);
app.use('/deleteBlog', deleteBlog);

app.get('/', (req, res) => {
    res.send("hello");
})


app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})
