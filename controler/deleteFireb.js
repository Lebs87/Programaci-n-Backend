const admin = require('firebase-admin')

const deletefb = async () => {
    const db = admin.firestore();
    const query = db.collection('colors');

    await query.doc('blue').delete();
};

module.exports = deletefb