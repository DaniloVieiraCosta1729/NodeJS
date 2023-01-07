const http = require("http");
const host = '127.0.0.1';
const port = 4000;

const server = http.createServer((req, res) => {
    if (req.url == "/"){
        
        res.end("Página Inicial.\nSe deseja saber qual é a soma entre dois números, vá para a página calculadora.");
    } else if (req.url = "/calculadora") {
        res.end("Oi.");
    }
})

server.listen(port, host, () => {
    console.log("O servidor está funcionando.");
})