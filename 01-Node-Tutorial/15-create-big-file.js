const {writeFileSync} = require('fs');

// writeFileSync('./content/big.txt', ``, {flag: 'w'}
//this can erase your whole file before you do anything

for ( let i = 0; i < 10000; i++){
    writeFileSync('./content/big.txt', `this is line ${i}\n`, {flag: 'a'})
}