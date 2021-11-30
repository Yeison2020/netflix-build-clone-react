import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBOJvquoZFvTK0dGqP4Jf4eC65FxuPRHaU",
  authDomain: "nextflix-build-clone.firebaseapp.com",
  projectId: "nextflix-build-clone",
  storageBucket: "nextflix-build-clone.appspot.com",
  messagingSenderId: "847733868667",
  appId: "1:847733868667:web:90b7d203b2ae97e5473ade",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth };
export default db;
