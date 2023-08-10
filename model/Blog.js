const mongoose = require('mongoose')
const {Schema} = mongoose;
const {model} = mongoose
const blogSchema = new Schema({
    title:String,
    content:String,
    
})

const Blog =model('Blog', blogSchema);
module.exports = Blog;