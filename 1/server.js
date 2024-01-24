const http = require('http')

// http.createServer((req, res) => {
//     res.end('teste')
// }).listen(3000)

const host = "127.0.0.1"
const port = 3000

const server = http.createServer((request, response) => {
    response.end('teste novo node')
}).listen(port, host, () => {
    console.log('Servidor em execução.')
})