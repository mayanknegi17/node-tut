const app = require('./app');
const http = require('http');
// console.log(app.add())

function dataControle(req, resp) {
    resp.write("<h1>This is the changed ok</h1>");
    resp.end();
}

// arrow Function

// const dataControle = (req, resp) => {
//     resp.write("<h1>This is the changed ok</h1>");
//     resp.end();
// }

http.createServer(dataControle) .listen(4500);