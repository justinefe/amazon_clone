import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyARIfGqOU9xkh4wXco-meABHftdTZfuoy4",
  authDomain: "ecommerce-447a4.firebaseapp.com",
  projectId: "ecommerce-447a4",
  storageBucket: "ecommerce-447a4.appspot.com",
  messagingSenderId: "22873443869",
  appId: "1:22873443869:web:b2cf63b9c872485814c0f4",
  measurementId: "G-FW4MTCZDLN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
