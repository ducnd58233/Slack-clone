import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBj3lRe7yV9bzVqDgcc6IEp9rR2V1gUTH0",
    authDomain: "slack-clone-challenge-3b691.firebaseapp.com",
    projectId: "slack-clone-challenge-3b691",
    storageBucket: "slack-clone-challenge-3b691.appspot.com",
    messagingSenderId: "374154511909",
    appId: "1:374154511909:web:3517eb6de72818e68e61cc",
    measurementId: "G-4B8VTM1VQ5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// firestore is a realtime db in Firebase
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();



export { auth, provider }
// use Object to export multiple things

export default db;
