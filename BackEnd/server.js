const http = require('http')
const app = require('./app')
var port =  process.env.PORT || 5000;


const server = http.createServer(app)


server.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`)
})