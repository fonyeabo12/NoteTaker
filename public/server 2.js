const util = require('util');
const fs = require ('fs');
const path = require('path');

const {v1: uuidv1} = require('uuid');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const DB = path.join(__dirname, 'db.json');
class Store {
    read() {
        return readFileAsync(DB, 'utf-8');
    }
};

async function test() {

    const store = new Store();
}

module.exports = Store;
