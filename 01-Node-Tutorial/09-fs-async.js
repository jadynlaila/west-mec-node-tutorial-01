const { readFile, writeFile } = require("fs");
let first;
console.log("start");

//returns a promise, just like useFetch

//below is an example of doing this sequentially
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    //writefile is also async, it returns a promise, not a result
    writeFile(
      "./content/async-result.txt",
      `here is the result: \n ${first} \n ${second}`,
      { flag: "w" },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        } else {
          console.log("done with task");
        }
      }
    );
  });
});

console.log("starting next task");
//this is async. where we can keep working on one thing while another is still running. doenst have to happen at the same time
