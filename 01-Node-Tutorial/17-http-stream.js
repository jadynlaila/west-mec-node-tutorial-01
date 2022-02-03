const http = require('http');
const fs = require('fs');

http
    .createServer()
    .on('request', (req, res) => {
        const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
        //pipe is a file stream method tha allows us to return a value to a server
        //for example how youtube only sends us 30 seconds ahead, pipe is good at this

        //'open' and 'error' are defaults
        fileStream.on('open', () => {
            fileStream.pipe(res);
        });
        fileStream.on('error', () => {
            res.end(err);
        })

    })
    .listen(5000);


