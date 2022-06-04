const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

const corsOpts = {
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
};
app.use(cors(corsOpts));

const port = 8080;

app.get('/me', (req, res) => {
  res.json({ name: 'Username' });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})