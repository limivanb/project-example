const fs = require('fs');
const os = require('os');

var logger = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const today = new Date();
  const year = today.getFullYear();
  const month = months[today.getMonth()];
  const day = today.getDate();

  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();

  return `${month} ${day}, ${year} ${hours}:${minutes}:${seconds}`;
};


const myCPU = os.cpus();
const myNetwork = os.networkInterfaces();

const model = myCPU[0].model;
const ip_address = myNetwork["en0"][1].address;

fs.appendFileSync('logs.txt', getCurrentDateTime() + '\r\n');
fs.appendFileSync('logs.txt',`CPU: ${model}\r\n`);
fs.appendFileSync('logs.txt',`IP: ${ip_address}\r\n`);

fs.appendFileSync('logs2.txt', getCurrentDateTime() + '\r\n');

module.exports = {logger};
// const person = {
//   name: 'Ivan',
//   age: 33
// };
//
// const personString = JSON.stringify(person, undefined, 2);
//
// fs.appendFileSync('logs.txt', personString + '\r\n');
