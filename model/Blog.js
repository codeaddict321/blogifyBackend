const mongoose = require('mongoose')

const {Schema} = mongoose;
const {model} = mongoose
const blogSchema = new Schema({
    title:String,
    content:String,
    createdAt: {
        type: Date,
        default: Date.now // Set default value to the current date and time
    },
    author:String
    
})

const Blog =model('Blog', blogSchema);
module.exports = Blog;