import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAVWCn1r5POUauJbr5-tzZcv6wJABZudUc",
  authDomain: "snapchat-clone-ee924.firebaseapp.com",
  projectId: "snapchat-clone-ee924",
  storageBucket: "snapchat-clone-ee924.appspot.com",
  messagingSenderId: "314548878911",
  appId: "1:314548878911:web:71699b6ca1c07e3623428a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
