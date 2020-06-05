console.log("hello")

/**
 * Create simple server with http module
 */

 const server = require('http')
 const port = 3000
 server.createServer().listen(port, () => console.log(`server is running on port: ${port}`))

