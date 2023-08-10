const Blog = require('../../model/Blog')
const controller = async (req,res)=>{
    const {id} = req.params;
    console.log(id);
       try{
      await Blog.deleteOne({_id:id})
       res.json({'msg':'deleted'})
       } catch(err){
        res.status(500)
       }
}

module.exports  = controller