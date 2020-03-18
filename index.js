'use strict';

const fs = require('fs');
const path = require('path');

/**
 * Function read directory asynchronous, recursively going around all directories and files included
 * @param {String} src - path to source directory
 * @returns {Promise<[]>} Promise resolve array of objects with info about files and empty directories included
 * in source directory, example:
 *  [ {
    root: 'C:\\',
    dir: 'C:\\Users\\User\\Projects\\untitled\\src',
    base: '1.png',
    ext: '.png',
    name: '1',
    readDir: 'C:\\Users\\User\\Projects\\untitled\\src'
  },
 {
    root: 'C:\\',
    dir: 'C:\\Users\\User\\Projects\\untitled\\src\\thumbs\\newDir',
    base: 'emptyDirectory',
    ext: '',
    name: 'emptyDirectory',
    readDir: 'C:\\Users\\User\\Projects\\untitled\\src'
  }]
 */
const readDirectory = async (src) => {
    if (typeof src !== 'string') throw  new Error('Path of read dir should be string');
    const arr = [];
    src = path.isAbsolute(src) ? src : path.resolve(process.cwd(), src);
    const rootDir = src;
    const iterateDir = async (src) => {
        try {
            let result = await fs.promises.readdir(src, {encoding: 'utf8', withFileTypes: true});
            if (result.length === 0) {
                let data = path.parse(src);
                data.readDir = rootDir;
                arr.push(data)
            }
            for await (const dirent of result) {
                if (dirent.isDirectory()) {
                    let tempResult = await iterateDir(`${src + path.sep + dirent.name}`)
                } else {
                    let data = path.parse(`${src + path.sep + dirent.name}`);
                    data.readDir = rootDir;
                    arr.push(data)
                }
            }
            return arr;
        } catch (err) {
            console.log(err);
        }
    };
    return await iterateDir(src);
};
module.exports = readDirectory;