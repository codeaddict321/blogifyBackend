const Blog = require('../../model/Blog')

const controller = async (req,res)=>{
   const {title,content}  = req.body;
  try{
   await Blog.create({title,content});// Using the correct method for inserting
   res.json({ 'msg': "blog created" });
  } catch(err){
   res.status(500).json({ 'error': "Failed to create blog" });
  }
}

module.exports = controller