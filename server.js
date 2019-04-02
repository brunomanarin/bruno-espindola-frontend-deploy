const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());
const port = 3001;

app.get('/', (req, res) => res.send('Made by Bruno Manarin'));
app.listen(port, () => console.log('Express rodando no', {port}));
app.use(express.static('api'))