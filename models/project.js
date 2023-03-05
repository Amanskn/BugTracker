const mongoose = require('mongoose');


// creating schema for data to be stored
const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
});


const Project = mongoose.model('project', projectSchema);
module.exports = Project; 

