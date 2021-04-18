import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAku9JZBidBM1PkHzrbEqvW3wUGaTsCsCQ',
    authDomain: 'nononograms.firebaseapp.com',
    databaseURL: 'https://nononograms-default-rtdb.firebaseio.com',
    projectId: 'nononograms',
    storageBucket: 'nononograms.appspot.com',
    messagingSenderId: '125187236255',
    appId: '1:125187236255:web:faad7f3476df62fbb61daa',
    measurementId: 'G-ZKX5SZ56BV',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
