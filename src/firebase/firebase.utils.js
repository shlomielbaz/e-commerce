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
    appId: "1:881548968779:web:baae2014022a17e324dece",
    measurementId: "G-KN7P4RL7DZ"
};

try {
    firebase.initializeApp(firebaseConfig);
} catch (err) {
    console.log('there is a problem with firebase.initializeApp')
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }
    
    const userRef = await firestore.doc('users/kjsdhfkjdshfskdhas');
    const userSnapShot = await userRef.get();
    
    console.log(userSnapShot);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();


// 'select_account' - always trigger a google popup whenever we use this google auth provider
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;