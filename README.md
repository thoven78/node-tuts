# A collection of tutorials on Node.js

**NOTE these tutorials are not pre ES6 friendly**

****
## The directory structure is as follow

- hello
  * Welcome to node and using the console object to print message to the console
    - console.log
    - console.error
    - console.time
    - console.warn
    - console.trace
- http
  - Create a simple http server in node
  - Running the http server node http/index.js
  - Calling the server from the terminal
    ```
    curl -d "{name: 'Stevenson Michel'}" http://localhost:8080/pipe
    ```
    It should print `{name: 'Stevenson Michel'}` back to the console
- inspect
  * The inspect function is an alias for console.dir
- node-debug
  * Using debugger & node-debugger
  - To use the debugger file run node debug  node-debug/debugger.js form there you can use the following commands
    - continue – cont, c
    - step – next, n
    - step in – step, s
    - step out – out, o
  - To use node-debug
    - First run npm install -g node-inspector (NOTE: you have to put sudo in front)
    - node-debug node-debug/debug.js
- fs
  - Using the file api
    - The file api have both asynchronous and synchronous methods
    - In this tutorial we will learn how to create and read file synchronously and asynchronously
    - We will later revisit this tutorial using Promise, async async series, parallel e.t.c
- npm
  - npm is the package manager for Node.js
  - The package.json file was created with the following command `npm init` and follow the direction
- Simple REST API
  - To get started `cd simple-api` and the run `npm install`
  - Running the server `npm start`
  - Running tests `npm test`
  - This API has two GET routes
  - `/api/v1/complaints` returns 9 complaints
  - `/api/v1/complaints?skip=3` returns 9 items from the 3 page
    - `/api/v1/complaints?skip=3&limit=12` returns 12 items from the 3 page
  - `/api/v1/complaints/:index` takes an index and does a lookup to see if a a given index is in the data set
  - The dataset came form data.gov
  you can call the api with the following commands:
   ```
    curl http://localhost:8080/api/v1/complaints | python -mjson.tool
   ```
   ```
    curl http://localhost:8080/api/v1/complaints?skip=2 | python -mjson.tool
   ```
   ```
    curl http://localhost:8080/api/v1/complaints?skip=2&limit=12 | python -mjson.tool
   ```
   ```
    curl http://localhost:8080/api/v1/complaints/10 | python -mjson.tool
   ```
