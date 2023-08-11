const express = require('express')
const app = express()
const registerRoute = require('./Routes/registerRoute');
const mongoose= require('mongoose');
const loginRoute = require('./Routes/loginRoute')
const blogRoute = require('./Routes/blogsRoute')
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); 
const PORT = process.env.PORT || 3000
const allowedOrigins = ['http://localhost:5173', 'https://www.blogify.netlify.app'];

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
const passport = require('passport');

const connectDB = require('./database/connect');

connectDB()
app.get('/',(req,res)=>{
    res.send('hi')
})
app.use('/login',loginRoute)
app.use('/register',registerRoute)

app.use('/blogs',blogRoute)


mongoose.connection.once('open',()=>{
  
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
})  