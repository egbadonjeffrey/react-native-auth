// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdwnqrhKI1nVhEMMlpX9NLnwiSR-PZVTs",
  authDomain: "mobile-todo-67340.firebaseapp.com",
  projectId: "mobile-todo-67340",
  storageBucket: "mobile-todo-67340.appspot.com",
  messagingSenderId: "970150037473",
  appId: "1:970150037473:web:843f23c98f11ee00fe34a0",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
