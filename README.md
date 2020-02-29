# node-read-directory
Nodejs simple lightweight function for reading directory recursively, no matter how deep is it
##Instalation
npm i node-read-directory

##Usage
const readDirectory = require('node-read-directory');

readDirectory('./sourceDir').then( data => console.log(data)).catch( error => console.error(error));
##How it works
For example source directory looks like below:
C:\USERS\USER\PROJECTS\UNTITLED\SRC
│   1.png
│
├───emptyDir
└───thumbs
    │   50-1.png
    │
    └───newDir
            30-2.png

So you get this:
 [
  {
    root: 'C:\\', \n
    dir: 'C:\\Users\\User\\Projects\\untitled\\src',
    base: '1.png',
    ext: '.png',
    name: '1',
    readDir: 'C:\\Users\\User\\Projects\\untitled\\src'
  },
  {
    root: 'C:\\',
    dir: 'C:\\Users\\User\\Projects\\untitled\\src',
    base: 'emptyDir',
    ext: '',
    name: 'emptyDir',
    readDir: 'C:\\Users\\User\\Projects\\untitled\\src'
  },
  {
    root: 'C:\\',
    dir: 'C:\\Users\\User\\Projects\\untitled\\src\\thumbs',
    base: '50-1.png',
    ext: '.png',
    name: '50-1',
    readDir: 'C:\\Users\\User\\Projects\\untitled\\src'
  },
  {
    root: 'C:\\',
    dir: 'C:\\Users\\User\\Projects\\untitled\\src\\thumbs\\newDir',
    base: '30-2.png',
    ext: '.png',
    name: '30-2',
    readDir: 'C:\\Users\\User\\Projects\\untitled\\src'
  }
]

