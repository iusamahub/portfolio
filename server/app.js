require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
require('./db/conn');
const router = require('./Routes/router');
const PORT = process.env.PORT || 6002;

app.use(cors());

app.use(express.json());

app.use(router);

app.get('/', (req,res) => {
    res.send("Hllo, Sever!")
})

app.listen(PORT, () => { 
    console.log('server is listening')
})