const admin = require('firebase-admin');

const update = async ()=> {
    const db = admin.firestore();
    const query = db.collection('colors');

    await query.doc('blue').set({ newName: 'navy' }, {merge: true})
};

module.exports = update
