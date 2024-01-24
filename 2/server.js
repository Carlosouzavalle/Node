const http = require('http')
const host = "127.0.0.1"
const port = 3000

const server = http.createServer((request, response) => {
    // console.log(request)
    // response.end("Criado output de dados do request no cosole")
    // response.end(request.url)
    response.setHeader("Content-Type", "text/plain; charset=utf-8")

    if(request.url == "/")
    {
        response.end("Pagina inicial do website")
    } 
    else if(request.url == "/new") {
        response.end("Pagina nova do website")
    } 
    else if(request.url == "/contacts") {
        response.end("Pagina de contatos do website")
    } 
    else {
        response.end("Pagina desconhecida")
    }
}) 

server.listen(port, host, () => {
    console.log("novo servidor em função")
})