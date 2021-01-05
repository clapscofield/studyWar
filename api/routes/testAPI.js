const express = require('express'),
  app = express(),
  port = process.env.PORT || 5000,
  cors = require('cors');

app.use(cors());
app.listen(port, () => console.log('Backend server live on ' + port));

app.get('/', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send({ message: 'We did it!' });
});

module.exports = app;