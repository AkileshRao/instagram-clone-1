require('dotenv').config()

console.log(process.env.DATABASE_URL)
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.json({ message: 'alive' });
});

app.get('/posts', (req, res) => {

})

app.listen(port, () => {
    console.log(`Listening to requests on port ${port}`);
});