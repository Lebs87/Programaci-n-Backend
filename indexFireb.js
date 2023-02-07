require('./config/connectToFirebase.js');
const read = require('./controler/readFireb')
const create = require('./controler/createFireb')
const update = require('./controler/updateFireb');
const deletefb = require('./controler/deleteFireb');

const server = async () => {
    await read();

    await create();

    await read();
console.log("xxx")
    await update();

    await read();
    console.log("xxx")
    await deletefb();
    await read();
};

server().finally(()=> console.log('Done'));