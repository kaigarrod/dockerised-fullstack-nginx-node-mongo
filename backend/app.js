const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/api/movies', (req, res) => {
    res.json(['Batman', 'Inception']);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});