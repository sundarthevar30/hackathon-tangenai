const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/transaction', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index2.html'));
});

const port = 8000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});