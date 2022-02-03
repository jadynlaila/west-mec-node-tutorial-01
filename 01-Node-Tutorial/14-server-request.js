const http = require('http');

http
    .createServer()
    .on('request', (req, res) => {
        if( req.url === '/') res.end('welcome')
        else res.end('404')
    })
    .on('load', () => {
        console.log('server is listening on port 5000');
    })
    .listen(5000);
    
