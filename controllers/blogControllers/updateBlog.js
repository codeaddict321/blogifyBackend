const Blog = require('../../model/Blog');

const controller = async (req, res) => {
    const { id, title, content } = req.body;
            
    try {
        await Blog.updateOne({ _id: id }, { title,content });
        res.json({ 'msg': "blog updated" });
    } catch (error) {
        res.status(500).json({ 'error': "Failed to update blog" });
    }
};

module.exports = controller;
