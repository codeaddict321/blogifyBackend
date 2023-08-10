const Blog = require('../../model/Blog')

const controller = async (req,res)=>{
    try{
   const data = await Blog.find()
     res.json({data})
    } catch(err){
        res.status(500).json({'msg':err})
    }
}

module.exports = controller