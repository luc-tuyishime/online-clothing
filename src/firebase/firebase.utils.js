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

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){    
    const { displayName, email } = userAuth;
    const createdAt = new Date;

    try{
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        })
      } catch(error){
          console.log('Error creating users', error.message);
      }
  }

  return userRef; // we may need it for something else in our code
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;