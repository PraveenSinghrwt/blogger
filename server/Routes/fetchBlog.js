const express = require('express');
const router = express.Router();

const Blog = require('../models/Blog')

router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find({}).sort({ createdAt: -1 });
        res.status(200).json(blogs)
    }
    catch (error) {
        console.error('Error fetching blogs: ', error);
        res.sendStatus(500);
    }
})

module.exports = router;