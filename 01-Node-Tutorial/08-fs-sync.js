const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
//utf8 is the encoder were using, 1s and 0s are stored differently for other options like pdf

writeFileSync(
    './content/sync-result.txt',
    `here is the result \n${first}, \n${second} `,
    //options go here
    {flag: 'a'}
    //this flag means were going to append/add to it(a is add, w is overwrite, blah blah)
    //if you add 'ax' it will only happen if it has not happened already, it rewrites the file and then replaces 
)
console.log(second);
console.log('finished');
console.log(first);