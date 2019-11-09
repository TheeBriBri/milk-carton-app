const express = require('express');
const cors = require('cors');
const router = require('./router');
const app = express();
const PORT = 3002 ;
const db = require('./db')

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`))

