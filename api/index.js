const express = require('express');
const app = express();
const { exec } = require('child_process');

let miyanrpc = exec('node rpc.js');

app.get('/', (req, res) => {
  res.status(200).send('Hello, World');
})
app.listen(8000, () => {
  console.log(`✅ Server is running on port ${PORT}`);
})