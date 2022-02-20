const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const VideoSchema = new Schema({
    title: String,
    description: String,
    image: String,
    dateCreated: {
        type: Date,
        default: Date.now
    }
})

// create modal
const Video = mongoose.model('Video', VideoSchema);

module.exports = Video