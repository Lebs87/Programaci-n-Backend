/* import { initializeApp } from 'firebase-admin/app';
const app = initializeApp(); */
const admin = require('firebase-admin');

const serviceAccount = require('./backend-pf2-credentials.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://backend-pf2.firebaseio.com'
})
