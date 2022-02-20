const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect DB
mongoose.connect('mongodb://localhost/pcat-test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// create schema
const PhotoSchema = new Schema({
    title: String,
    description: String,
})

// create modal
const Video = mongoose.model('Video', PhotoSchema);


//create a video
Video.create({
    title: 'Video Title 1',
    description: 'Video description 1 lorem ipsum',
});