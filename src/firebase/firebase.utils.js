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
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;