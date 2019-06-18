const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' })
            // res.write('hola mundo');
        let salida = {
            nombre: 'Diego',
            edad: 29,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8089);

console.log(`Escuchando puerto 8089`);