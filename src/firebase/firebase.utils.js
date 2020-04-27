import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCfZqqR-cqwlh_Sa4xVM95VAvBfbIv1Dos",
    authDomain: "clothing-app-cf2cc.firebaseapp.com",
    databaseURL: "https://clothing-app-cf2cc.firebaseio.com",
    projectId: "clothing-app-cf2cc",
    storageBucket: "clothing-app-cf2cc.appspot.com",
    messagingSenderId: "942249021279",
    appId: "1:942249021279:web:d2dd70ea9f8ddf9218f0ea",
    measurementId: "G-DJB99BJ6F5"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;