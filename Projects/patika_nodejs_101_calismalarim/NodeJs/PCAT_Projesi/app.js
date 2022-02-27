const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const ejs = require('ejs');
const path = require('path');
const fs = require('fs')
const Video = require('./models/Video');
const methodOverride = require('method-override');
const photoController = require('./controllers/videoControllers');
const pageController = require('./controllers/pageController');
const app = express();

//Connect DB
mongoose.connect('mongodb+srv://BarisGc:B16cGcHWL1zYGSZY@cluster0.3fzuk.mongodb.net/PCATDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
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
app.get('/', photoController.getAllPhotos);
app.get('/videos/:id', photoController.getPhoto);
app.post('/videos', photoController.createPhoto);
app.put('/videos/:id', photoController.updatePhoto);
app.delete('/videos/:id', photoController.deletePhoto);

app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPage);
app.get('/videos/edit/:id', pageController.getEditPage);

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı..`);
});