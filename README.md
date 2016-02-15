# A collection of tutorials on Node.js

**NOTE these tutorials are not pre ES6 friendly**

****
## The directory structure is as follow

- hello
  * Welcome to node and using the console object to print message to the console
    - console.log
    - console.error
    - console.debug
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
    It should print ```{name: 'Stevenson Michel'}``` back to the console
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
- npm
