require('dotenv').config()


console.log(process.env.DATABASE_URL)
const { PrismaClient } = require('@prisma/client');
const express = require('express');
const app = express();
const prisma = new PrismaClient();
const cors = require('cors')

const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: 'alive' });
});

app.get('/posts', async (req, res) => {
    try {
        const posts = await prisma.post.findMany();
        res.status(200).send({ posts })
    } catch (error) {
        console.log(error);
    }
})

app.listen(port, () => {
    console.log(`Listening to requests on port ${port}`);
});