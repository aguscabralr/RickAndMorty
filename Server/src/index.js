const http = require("http");
const characters = require("./utils/data")

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes('/rickandmorty/character')) {
        let id = req.url.split('/').at(-1);
        // filter -> devuelve un array con todos los characters que coincidan
        // find -> devuelve un objeto con el primer character que coincida
        let character = characters.find(char => char.id === Number(id)); // es mas optimo por ser el id unico
        res.writeHead(200, { 'Content-Type': 'application/json' }).end(JSON.stringify(character));
    };
}).listen(3001, 'localhost');