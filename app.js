/**
 * Create simple server with http module
 * Set up index page for client at / and have the web application display Hello World
 */
const http = require('http')
const fs = require('fs')
const path = require('path')
const port = 3000

const server = http.createServer((req, res) => {
     res.write("hello world")
     res.end()
    })
     .listen(port, () => 
     console.log(`server is running on port: ${port}`))





