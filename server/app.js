const express = require('express');
const app = express();
const userRouter = require('./v1/routes/userRouter');
const cors = require('cors');
const path = require('path');
const db = require("./v1/models")


//Everytime the server restarts, this block will tally models
//with the database and make changes if any.
//https://sequelize.org/docs/v6/core-concepts/model-basics/#model-synchronization
db.sequelize.sync({ alter: true }).then(() => {
  console.log("Synced Database.");
}).catch((err) => {
  console.log("Failed to sync database: ", err.message);
})


app.use(cors({ origin: '*' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use('/api/v1/users', userRouter)

//Add token middleware
// app.use('/api/v1/posts', middleWare, postsRouter)


module.exports = app;