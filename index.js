const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('🐳 GCP CLOUD RUN TEST!!! 🐳');
});

app.listen(8080, () => console.log('Server is running 🤖 GCP TEST! 🤖'));
