const express = require('express');
const app = express();
const { exec } = require('child_process');

let miyanrpc = exec('node rpc.js');

app.get('/', (req, res) => {
  res.status(200).send('Hello, World');
});

app.get('/push', (req, res) => {
  const token = req.headers['x-hub-signature'];
  if (token === 'MiyanRPC') {
    exec('sh pull.sh', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error during pull: ${error}`);
        res.status(500).send('Error during pull');
        return;
      }
      // Stop the current rpc.js process
      miyanrpc.kill();

      // Restart rpc.js
      miyanrpc = exec('node rpc.js');
      res.status(200).send('Pulled latest changes and restarted rpc.js');
    });
  } else {
    res.status(403).send('Invalid token');
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
