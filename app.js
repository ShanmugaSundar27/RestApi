const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const cors = require('cors');

//middlewares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);
//ROUTES
app.get('/', (req,res)=>{
    res.send('we are Home');
});


//Db Connect
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true},() => 
console.log('Connected to db')
);
//Listening to server
app.listen(3000);