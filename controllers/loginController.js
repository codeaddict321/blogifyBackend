
const bcrypt = require('bcrypt');
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const ACCESS_TOKEN_SECRET = '8b6e0589176110606fd043a81f3af050f2247b5408c554e21d8e79101846ee56'
const controller = async (req, res) => {
    const {username,password} = req.body
    const user = await User.findOne({username})
    
      try {
         if(!user) return res.json({"msg":"username doesnt exist"})
     
            const verifyPwd = await bcrypt.compare(password,user.password)
            
           if(!verifyPwd) return res.status(401).json({'msg':"pwd doesnt match"})

              const payload = {username:user.username,role:user.role}
           

              const token = jwt.sign(payload,ACCESS_TOKEN_SECRET)
              res.json({token,role:user.role})
           
  
  
  
         
      } catch (error) {
          console.error(error);
          res.status(500).json({ 'message': 'Internal Server Error' });
      }
  }

  module.exports = controller