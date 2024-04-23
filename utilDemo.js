import util from 'util';
import fs from 'fs';

// format()
const name = 'John';
const age = 30;
const greeting = util.format('Hello, %s. You are %d years old', name, age);
console.log(greeting);

// inspect()
const obj = { name: 'John', age: 30 };
console.log(util.inspect(obj));

// promisify()
const readFile = util.promisify(fs.readFile);

readFile('./test.txt', 'utf8')
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
