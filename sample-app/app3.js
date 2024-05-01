const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/investment', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index3.html'));
});

const port = 9000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});