const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const ejs = require('ejs');
const path = require('path');
const fs = require('fs')
const Post = require('./models/Post');
const methodOverride = require('method-override');
const postController = require('./controllers/postControllers');
const pageController = require('./controllers/pageController');
const app = express();

//Connect DB
mongoose.connect('mongodb+srv://BarisGc:h098Oaqx5OgOt3Ke@cluster0.upph0.mongodb.net/CleanBlog-db?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("db connected?")
}).catch((err) => {
    console.log(err)
});

//Template Engine
app.set("view engine", "ejs");

// MiddleWares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(fileUpload());
app.use(methodOverride('_method', {
    methods: ['POST', 'GET']
}));

// Routes
app.get('/', postController.getAllPosts);
app.get('/posts/:id', postController.getPost);
app.post('/posts', postController.createPost);
app.put('/posts/:id', postController.updatePost);
app.delete('/posts/:id', postController.deletePost);

app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPage);
app.get('/posts/edit/:id', pageController.getEditPage);

const port = process.env.PORT || 5001
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı..`);
});