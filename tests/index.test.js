'use strict';

const fs = require('fs');
const readDirectory = require('../index');

const makeTestDirectory = async () => {
    await fs.promises.mkdir('./tests/testDir/dir1', {recursive: true});
    await fs.promises.mkdir('./tests/testDir/dir1/emptyDir', {recursive: true});
    await fs.promises.appendFile('./tests/testDir/dir1/testFile1.txt', 'Here is data',
        {encoding: 'utf8'})
};
beforeAll(() => {
    return makeTestDirectory().then(() => true);
});
describe('Let\'s test this', () => {
    it('Returning an array', async () => {
        expect.assertions(1);
        const data = await readDirectory('./tests/testDir');
        expect(Array.isArray(data)).toBeTruthy();
    });
    it('Return array length should be 2', async () => {
        expect.assertions(1);
        const data = await readDirectory('./tests/testDir');
        expect(data.length).toBe(2);
    });
    it('Elements of result array should be objects with properties matched', async () => {
        const data = await readDirectory('./tests/testDir');
        expect.assertions(data.length);
        data.forEach(elem => {
            expect(elem).toMatchObject({
                    root: expect.any(String),
                    dir: expect.any(String),
                    base: expect.any(String),
                    ext: expect.any(String),
                    name: expect.any(String),
                    readDir: expect.any(String),
                }
            );
        });
    });
});

afterAll(() => {
    fs.promises.unlink('./tests/testDir/dir1/testFile1.txt').then(() => {
        fs.promises.rmdir('./tests/testDir', {recursive: true}).then(() => true).catch((err) => {
            throw err;
        })
    }).catch(
        (err) => {
            throw err;
        });

});
