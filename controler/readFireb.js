const admin = require('firebase-admin')

const read = async () => {
    const db = admin.firestore();
    const query = db.collection('colors');

    const querySnapshot = await query.get();

    if(querySnapshot.empty){
        console.log('Colección vacía')
    } else { 
        querySnapshot.forEach(doc => {
            console.log(JSON.stringify(doc.data(), null, 2))
        })
    }
}

module.exports = read;
//export default read