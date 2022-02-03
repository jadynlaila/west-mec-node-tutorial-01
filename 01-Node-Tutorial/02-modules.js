const number = require('./01-intro');
const logFunc = require('./03-module-functions');
const {kids, num3, num2} = require('../04-globals');
const {num} = number;
const freeMem = require('../05-os-module');



//APIKEY is a local variable 
//unseeable from the base file
const APIKEY = 'sdjf';

logFunc(freeMem);

logFunc(num + " logging " + num3);
console.log(num + num2);

