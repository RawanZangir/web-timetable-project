<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WebSocket Example</title>
</head>
<body>
  <h1>WebSocket Example</h1>

  <script>
    const socket = new WebSocket('ws://localhost:3000');

    // Connection opened
    socket.addEventListener('open', (event) => {
      console.log('WebSocket connection opened');
    });

    // Listen for messages from the server
    socket.addEventListener('message', (event) => {
      console.log(`Received message from server: ${event.data}`);
    });

    // Connection closed
    socket.addEventListener('close', (event) => {
      console.log('WebSocket connection closed');
    });

    // Send a message to the server
    socket.send('Hello, WebSocket server!');
  </script>
</body>
</html>
