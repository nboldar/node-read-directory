# node-read-directory #
Nodejs simple lightweight function for reading directory recursively, no matter how deep is it    
## Instalation ##
`npm i node-read-directory`    

##  Usage  ##    
`const readDirectory = require('node-read-directory');`    

`readDirectory('./sourceDir').then( data => console.log(data)).catch( error => console.error(error));`    

## How it works ##    
For example source directory looks like below:<br/>
C:\USERS\USER\PROJECTS\UNTITLED\SRC </p>  
│&nbsp;&nbsp;&nbsp;1.png  
│  
├───emptyDir  
└───thumbs  
&emsp;&emsp;&emsp;&emsp;&emsp;│&nbsp;&nbsp;&nbsp;50-1.png  
&emsp;&emsp;&emsp;&emsp;&emsp;│  
&emsp;&emsp;&emsp;&emsp;&emsp;└───newDir  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;30-2.png  

So you get this:  
[  
  &emsp;{  
    &emsp;&emsp;root: 'C:\\',  
    &emsp;&emsp;dir: 'C:\\Users\\User\\Projects\\untitled\\src',  
    &emsp;&emsp;base: '1.png',  
    &emsp;&emsp;ext: '.png',  
    &emsp;&emsp;name: '1',  
    &emsp;&emsp;readDir: 'C:\\Users\\User\\Projects\\untitled\\src'  
  &emsp;},  
  &emsp;{  
    &emsp;&emsp;root: 'C:\\',  
    &emsp;&emsp;dir: 'C:\\Users\\User\\Projects\\untitled\\src',  
    &emsp;&emsp;base: 'emptyDir',  
    &emsp;&emsp;ext: '',  
    &emsp;&emsp;name: 'emptyDir',  
    &emsp;&emsp;readDir: 'C:\\Users\\User\\Projects\\untitled\\src'    
  &emsp;},  
  &emsp;{  
    &emsp;&emsp;root: 'C:\\',    
    &emsp;&emsp;dir: 'C:\\Users\\User\\Projects\\untitled\\src\\thumbs',  
    &emsp;&emsp;base: '50-1.png',  
    &emsp;&emsp;ext: '.png',  
    &emsp;&emsp;name: '50-1',  
    &emsp;&emsp;readDir: 'C:\\Users\\User\\Projects\\untitled\\src'  
  &emsp;},  
  &emsp;{    
    &emsp;&emsp;root: 'C:\\',    
    &emsp;&emsp;dir: 'C:\\Users\\User\\Projects\\untitled\\src\\thumbs\\newDir',  
    &emsp;&emsp;base: '30-2.png',  
    &emsp;&emsp;ext: '.png',  
    &emsp;&emsp;name: '30-2',  
    &emsp;&emsp;readDir: 'C:\\Users\\User\\Projects\\untitled\\src'  
  &emsp;}  
]
<br/>
That way very usefull for coping files and directories.
 

