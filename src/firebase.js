import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDVZHydTFB-gBSPKQrjSP-5gY6HJwYL4OA",
  authDomain: "i-message-b45c1.firebaseapp.com",
  projectId: "i-message-b45c1",
  storageBucket: "i-message-b45c1.appspot.com",
  messagingSenderId: "863834435424",
  appId: "1:863834435424:web:f5700baf738c9633ffb805",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
