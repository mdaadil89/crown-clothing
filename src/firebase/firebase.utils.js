import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'



const  config = {
    apiKey: "AIzaSyAWQWAMaVHJj1N3mHRAbhrmotG4N12Gpiw",
    authDomain: "crn-clothing.firebaseapp.com",
    databaseURL: "https://crn-clothing.firebaseio.com",
    projectId: "crn-clothing",
    storageBucket: "crn-clothing.appspot.com",
    messagingSenderId: "200593011499",
    appId: "1:200593011499:web:1484d6f176ba063ca68b6e",
    measurementId: "G-5F57XKSGNL"
  };

  firebase.initializeApp(config);

  export const auth =firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;