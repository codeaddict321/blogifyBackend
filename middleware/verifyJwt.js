const jwt = require('jsonwebtoken');

const ACCESS_TOKEN_SECRET = '8b6e0589176110606fd043a81f3af050f2247b5408c554e21d8e79101846ee56'
function verifyJwt(req,res,next) {
    const token = req.headers['authorization'];
    if(!token) return res.status(401).json({ message: 'Missing authorization token' })
    try {
        const decoded = jwt.verify(token.split(' ')[1],ACCESS_TOKEN_SECRET);
       
        req.user = decoded;
      ; // Store the decoded user information in the request
        next();
      } catch (error) {
        return res.status(403).json({ message: 'Invalid token' });
      }
}

module.exports = verifyJwt