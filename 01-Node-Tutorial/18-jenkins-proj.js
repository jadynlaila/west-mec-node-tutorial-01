const http = require("http");
const os = require("os");
const user = os.userInfo();

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`
        <h1>Welcome...</h1>
        <h3>You are about to encounter a series of tests designed to measure your abilities, and to see if you are the right fit for us.</h3>
        <h3>Ready to start?</h3>
        <h3>If yes, add "/answer" to the end of the url</h3>
        `);
    console.log(`${user.username} has joined`);
  } else if (req.url === "/answer") {
    res.end(`
        <h1>What is 3/7 chicken, 2/3 cat and 2/4 goat?</h1>
        <h3>If you think you've found your answer, replace 'answer' in the url with your answer</h3>
        <h3>Stuck? Add 'hint' to the very end of your url</h3>
        `);
    console.log(`${user.username} has started the first puzzle`);
  } else if (req.url === "/answer/hint") {
    res.end(`
        <h1>So, you can't figure out what is 3/7 chicken, 2/3 cat and 2/4 goat?</h1>
        <h3>Think: Spell out each word! What is 3/7 of the word 'chicken', 2/3 of the word'cat', and 2/4 of the word 'goat'?</h3>
        `);
    console.log(`${user.username} used a hint for the first puzzle`);
  } else if (req.url === "/chicago") {
    res.end(`
        <h1>What word of five letters has one left when two are removed?</h1>
        <h3>If you think you've found your answer, replace 'answer' in the url with your answer</h3>
        <h3>Stuck? Add 'hint' to the very end of your url</h3>
        `);
    console.log(`${user.username} has made it to the second puzzle`);
  } else if (req.url === "/chicago/hint") {
    res.end(`
        <h1>So, you can't figure out what word of five letters has one left when two are removed?</h1>
        <h3>Think: It's not about numbers! What is a word that has two letters in front and ends in 'one'?
        `);
    console.log(`${user.username} used a hint for the second puzzle`);
  } else if (req.url === "/stone") {
    res.end(`
        <h1>If two's company, and three's a crowd, what are four and five?</h1>
        <h3>If you think you've found your answer, replace 'answer' in the url with your answer</h3>
        <h3>Stuck? Add 'hint' to the very end of your url</h3>
        `);
    console.log(`${user.username} has made it to the third puzzle`);
  } else if (req.url === "/stone/hint") {
    res.end(`
        <h1>So, you couldn't figure out if two's company, and three's a crowd, what are four and five?</h1>
        <h3>Think: Forget the rest! What are four and five together?</h3>
        `);
    console.log(`${user.username} used a hint for the third puzzle`);
  } else if (req.url === "/nine") {
    res.end(`
        <h1>A little girl goes to the store and buys one dozen eggs. As she is going home, all but three break. How many eggs are left unbroken?</h1>
        <h3>If you think you've found your answer, replace 'answer' in the url with your answer</h3>
        <h3>Stuck? Add 'hint' to the very end of your url</h3>
        `);
    console.log(`${user.username} has made it to the fourth puzzle`);
  } else if (req.url === "/nine/hint") {
    res.end(`
        <h1>So, you couldn't figure out how many eggs are left unbroken?</h1>
        <h3>Think: Read again! You're thinking too hard! You have the answer. Make sure you're typing it in word form.</h3>
        `);
    console.log(`${user.username} used a hint for the fourth puzzle`);
  } else if (req.url === "/three") {
    res.end(`
        <h1>A word I know, six letters it contains, remove one letter and 12 remains. What is it?</h1>
        <h3>If you think you've found your answer, replace 'answer' in the url with your answer</h3>
        <h3>Stuck? Add 'hint' to the very end of your url</h3>
        `);
    console.log(`${user.username} has made it to the fifth puzzle`);
  } else if (req.url === "/three/hint") {
    res.end(`
        <h1>So you couldn't figure out a word I know, six letters it contains, remove one letter and 12 remains. What is it?</h1>
        <h3>Think: What word is used to represent 12 things? Think about eggs! Now, what one letter can you add (and then remove) to that word to make it six letters!
        `);
    console.log(`${user.username} used a hint for the fifth puzzle`);
  } else if (req.url === "/dozens") {
    res.end(`
        <h1>What five-letter word becomes shorter when you add two letters to it?</h1>
        <h3>If you think you've found your answer, replace 'answer' in the url with your answer</h3>
        <h3>Stuck? Add 'hint' to the very end of your url</h3>
        `);
    console.log(`${user.username} has made it to the sixth puzzle`);
  } else if (req.url === "/dozens/hint") {
    res.end(`
        <h1>So, you couldn't figure out what five-letter word becomes shorter when you add two letters to it?</h1>
        <h3>Think: The key is right there in the riddle! What's a word that you can add two letters to to get the word 'shorter'
        `);
    console.log(`${user.username} used a hint for the sixth puzzle`);
  } else if (req.url === "/short") {
    res.end(`
        <h1>Congratulations, your test is complete.</h1>
        <h3>In honor of your achievements, we would like to offer you a spot in our secret society.</h3>
        <h3>To accept, please meet at 29.9792&deg N, 31.1342&deg E on October 12, 2021 at 8:00PST</h3>
        <h3>We have your name, you may now exit this page</h3>
        `);
    console.log(`${user.username} has completed the game`);
  } else{
    res.end(`
        <h1>Incorrect.</h1>
        <h3>Unfortunately, we cannot offer you a place with us. Goodbye!</h3>
        `);
  }
});

server.listen(5000);
