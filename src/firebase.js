//import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAVWCn1r5POUauJbr5-tzZcv6wJABZudUc",
  authDomain: "snapchat-clone-ee924.firebaseapp.com",
  projectId: "snapchat-clone-ee924",
  storageBucket: "snapchat-clone-ee924.appspot.com",
  messagingSenderId: "314548878911",
  appId: "1:314548878911:web:71699b6ca1c07e3623428a"
};

//const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebase = initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
const db = getFirestore();

// const auth = firebase.auth();
const auth = getAuth();

// const storage = firebase.storage();
const storage = getStorage(firebase);

// const provider = new firebase.auth.GoogleAuthProvider();
const provider = new GoogleAuthProvider();

export { db, auth, storage, provider };
