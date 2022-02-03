const path = require('path');
console.log(path.sep);
// output is '/', tells us that every path is separated by a /

const filePath = path.join('/content/', 'subfolder', 'test.txt');
//formats files well, path is for consistency
console.log(filePath);

const base = path.basename(filePath);
//whatever the last thing in the directory list is, what are we on noww
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);