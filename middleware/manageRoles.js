const allRoles = {
    admin: ['GET','POST','PUT','DELETE'],
    editor: ['GET','POST'],
    user: ['GET']
  };
  
  function manageRoles(method) {
    return (req, res, next) => {
      const role = req.user.role;

      const allowedRoles = allRoles[role];
  
      if (allowedRoles.includes(method)) {
        
        next(); // Call next() here, after the check
      } else {
        res.status(401).json({ 'msg': 'Not allowed' });
      }
    };
  }
  
  module.exports = manageRoles;
  