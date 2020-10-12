import * as firebase from "firebase/app";
import "firebase/storage";

let firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET
  };
  firebase.initializeApp(firebaseConfig);

export default firebase;
