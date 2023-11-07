const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/addTask');

// Attempt to connect to database
db.sync();

app.listen(4000, () => console.log(`Running on port 4000`));