const http = require('http');

const server = http.createServer((request, response) =>{
    console.log("headers:",request.headers );
    console.log("method:",request.method );
    console.log("url:",request.url );
const user = {
    name: 'Mpho Vincent',
    hobby: 'Coding, Gaming and Drawing',
    age: 23
}
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(user));
    console.log("I hear you!!. thanks for the request.")
});

server.listen(3001);