# 0x05-Node_JS_basic

## Description
This project is an introduction to the basics of Node.js, including how to create a simple HTTP server and work with Node.js modules. It covers foundational concepts that help you get started with Node.js, such as using the built-in `http` module, creating custom modules, and running JavaScript code in a server environment.

## Learning Objectives
By completing this project, you will learn:
- How to run JavaScript using Node.js
- How to create a simple HTTP server
- How to use built-in modules like `http` and `fs`
- How to export and import custom modules
- Understanding the basics of Node.js and event-driven programming

## Prerequisites
- Basic knowledge of JavaScript
- Installed Node.js on your machine ([Download Node.js](https://nodejs.org/))

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/<your-username>/0x05-Node_JS_basic.git
   cd 0x05-Node_JS_basic
   ```

2. **Install Node.js**:
   If you haven't already, download and install Node.js from the official website: [nodejs.org](https://nodejs.org/).

3. **Run the example HTTP server**:
   - Navigate to the directory containing the `server.js` file.
   - In your terminal, run the server:
     ```bash
     node server.js
     ```

4. **Access the server**:
   Open a web browser and go to `http://localhost:3000/`. You should see the message:
   ```
   Hello, World!
   ```

## Project Structure
```
0x05-Node_JS_basic/
├── README.md
├── package.json (optional if you’re using npm)
├── server.js    # A simple HTTP server using Node.js
└── math.js      # Example of a custom module
```

### Files:

1. **`server.js`**:
   - A simple HTTP server created using Node.js' built-in `http` module.
   - Sends the response "Hello, World!" when accessed on port 3000.

2. **`math.js`**:
   - A custom module that exports an `add` function to perform basic addition.
   - Demonstrates how to create and use custom modules in Node.js.

## Example Code

### `server.js` - Simple HTTP Server
```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/');
});
```

### `math.js` - Custom Module Example
```js
function add(a, b) {
  return a + b;
}

module.exports = { add };
```

### Using the `math.js` Module
```js
const math = require('./math');
console.log(math.add(5, 3)); // Output: 8
```

## Usage
- Modify and extend the HTTP server to serve different responses based on the URL.
- Create additional modules to perform tasks like file manipulation, database interaction, or working with APIs.

## Resources
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Understanding Node.js Modules](https://nodejs.org/api/modules.html)
- [HTTP Module in Node.js](https://nodejs.org/api/http.html)

## Author
- **Mojibola Olalekan** 
