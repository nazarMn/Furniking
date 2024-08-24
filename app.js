const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');



// const PORT = process.env.PORT || PORT;

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname, 'public', 'index.html')
})

app.listen(PORT, () => {
    console.log(`Server work on PORT: ${PORT}`);
})