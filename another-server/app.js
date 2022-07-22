const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const DATABASE = process.env.DATABASE;
const userRouter = require('../another-server/v1/routes/userRouter');
const cors = require('cors');
const path = require('path')

mongoose
  .connect(DATABASE, {
  })
  .then(() => {
    console.log('Database connected ...!')
  }, (err) => {
    console.log(err);
  });


app.use(cors({origin:'*'}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true, limit: '50mb'}));
app.use('/api/v1/users', userRouter)  


module.exports = app;