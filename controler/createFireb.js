const admin = require('firebase-admin');

const create = async ()=>{
    const db = admin.firestore();
    const query = db.collection('colors');

    await Promise.all([
        query.doc('red').set({ name: 'red' }),
        query.doc('blue').set({ name: 'blue' }),
        query.doc('green').set({ name: 'green' }),
    ]);
    console.log('Create done');
};

module.exports = create