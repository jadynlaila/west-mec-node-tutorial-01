

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./content/first.txt")
//     .then((result) => console.log(result))
//         .then(writeFile('this is done'))
//             .catch((err) => console.log(err))
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const util = require('util');

// const readFilePromise = util.promisify(readFile);
// //turns read file into a promise
// const writeFilePromise = util.promisify(writeFile);.

// readFilePromise('./content/first.txt')
//     .then((result) => console.log(result))
//         .catch((err) => console.log(err));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const { readFile, writeFile } = require("fs").promises;

const start = async () => {
    try{
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile(
            './content/promise-result.txt',
            `this was made with promises: \n ${first} \n ${second} \n\n`,
            { flag : 'a' }
        );
        console.log(first, second);
    }
    catch (err) {
        console.error(err);
    }
}

start();

