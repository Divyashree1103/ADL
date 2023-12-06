// Include the 'http' module for creating an HTTP server.
const http = require('http');

// Create an HTTP server that listens on port 8080.
const server = http.createServer((req, res) => {
  // Set the response header with a 200 OK status and text/plain content type.
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the "Hello, Node.js!" message to the client.
  res.end('Hello, Node.js!\n');
});

// Start the server and listen on port 8080.
server.listen(8080, 'localhost', () => {
  console.log('Server is running on http://localhost:8080/');
});
