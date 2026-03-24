const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 3001;

const client = new MongoClient(`mongodb://${process.env.DB_HOST}:27017`);

app.get('/api/films', async (req, res) => {
    try {
        await client.connect();

        const db = client.db('moviesdb');
        const collection = db.collection('films');

        const films = await collection.find().toArray();

        res.json(films);
    } catch (err) {
        res.status(500).send('Error fetching data');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});