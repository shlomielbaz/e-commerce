import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDdtu57X4K7RjQp0zTt1d1V-lI_usxnkDk",
    authDomain: "e-commerce-db-fc93c.firebaseapp.com",
    databaseURL: "https://e-commerce-db-fc93c.firebaseio.com",
    projectId: "e-commerce-db-fc93c",
    storageBucket: "e-commerce-db-fc93c.appspot.com",
    messagingSenderId: "881548968779",
    appId: "1:881548968779:web:679cfed6416a912524dece",
    measurementId: "G-Q2CPSV1LRN"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GithubAuthProvider();


// 'select_account' - always trigger a google popup whenever we use this google auth provider
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;