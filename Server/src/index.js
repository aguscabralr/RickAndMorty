// const characters = require("./utils/data")
const http = require("http");
const { getCharById } = require("./controllers/getCharById");

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // if (req.url.includes('/rickandmorty/character')) {
    //     let id = req.url.split('/').pop();
    //     // filter -> devuelve un array con todos los characters que coincidan
    //     // find -> devuelve un objeto con el primer character que coincida
    //     let character = characters.find(char => char.id === Number(id)); // es mas optimo por ser el id unico
    //     res.writeHead(200, { 'Content-Type': 'application/json' }).end(JSON.stringify(character));
    // };
    if (req.url.includes('/rickandmorty/character')) {
        let id = Number(req.url.split('/').at(-1));
        getCharById(res, id);
    };
}).listen(3001, 'localhost');