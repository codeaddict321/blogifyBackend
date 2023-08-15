const Blog = require('../../model/Blog')

const controller = async (req,res)=>{
    try{
        const pipeline = [
            {
                $project: {
                    _id: 1,
                    author:1,
                    createdAt:1,
                    title:1,
                    content: {
                        $split: ['$content', ' ']
                    }
                }
            },
            {
                $project: {
                    _id: 1,
                    author:1,
                    createdAt:1,
                    title:1,
                    limitedContent: {
                        $slice: ['$content', 50]
                    }
                }
            }
        ];
        const limitedData = await Blog.aggregate(pipeline); 
         
        res.json({ data: limitedData });     
 
    } catch(err){
        res.status(500).json({'msg':err})
    }
}

module.exports = controller
