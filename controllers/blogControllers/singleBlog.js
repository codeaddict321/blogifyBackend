const Blog = require('../../model/Blog')

const controller = async (req,res)=>{
    const {id} = req.params;
   
    try{
      
        const data = await Blog.find({_id:id}); 
          
        res.json({ data });     
 
    } catch(err){
        res.status(500).json({'msg':err})
    }
} 


module.exports = controller


