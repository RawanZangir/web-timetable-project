// WebSocket server on the backend
const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');

  // Handle messages from the client
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);

    // Broadcast the message to all connected clients
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  // Send a welcome message to the newly connected client
  ws.send('Welcome to the WebSocket server!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`WebSocket server is listening at http://localhost:${port}`);
});
