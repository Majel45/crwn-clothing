import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAW_Pg0q1w0e97Cmve7y44xm_LpOPECQ30",
  authDomain: "crown-db-4d479.firebaseapp.com",
  projectId: "crown-db-4d479",
  storageBucket: "crown-db-4d479.appspot.com",
  messagingSenderId: "307739787279",
  appId: "1:307739787279:web:e049873894fdade586a37a",
  measurementId: "G-SYCMXPVXCQ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;