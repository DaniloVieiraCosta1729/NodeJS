const http = require("http");
const host = "127.0.0.1";
const port = 5000;

const servidor = http.createServer((request, response) => {
    response.end("Testando novamente o servidor.");
})

servidor.listen(port, host, () => {
    console.log("Servidor em execução.");
});