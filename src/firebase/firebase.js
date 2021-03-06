import * as firebase from 'firebase';
import 'firebase/storage';

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database();
var storage = firebase.storage();
//set the database auth provider
const authProvider = firebase.auth();


export { firebase, authProvider, storage, database as default };