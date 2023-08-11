const express = require('express')
const app = express()
const verifyJwt = require('./middleware/verifyJwt');
const registerRoute = require('./Routes/registerRoute');
const mongoose= require('mongoose');
const loginRoute = require('./Routes/loginRoute')
const blogRoute = require('./Routes/blogsRoute')
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); 
const PORT = process.env.PORT || 3000
const allowedOrigins = ['http://localhost:5173', 'https://www.blogify.netlify.app'];
const cors = require('cors')
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(corsOptions));

const manageRoles = require('./middleware/manageRoles');




connectDB()
app.get('/',(req,res)=>{
    res.send('hi')
})
app.use('/login',loginRoute)
app.use('/register',registerRoute)

app.use('/blogs',blogRoute)
app.get('/role', verifyJwt, manageRoles('GET'), (req, res) => {
  // Handle the GET request for the user's role
  const userRole = req.user.role;
  res.json({ role: userRole });
});

mongoose.connection.once('open',()=>{
  
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
})  