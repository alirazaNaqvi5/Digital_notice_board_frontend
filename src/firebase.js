import firebase from "firebase";
const config = {
  apiKey: "AIzaSyBNnRy-vo-p2iR-zBpwnAxEvd1YzJo4ANY",
  authDomain: "notifyapp-a712a.firebaseapp.com",
  projectId: "notifyapp-a712a",
  storageBucket: "notifyapp-a712a.appspot.com",
  messagingSenderId: "463419582291",
  appId: "1:463419582291:web:fd53263ab1beb0980723a6",
};

firebase.initializeApp(config);
const db = firebase.firestore();
var storage = firebase.storage();

export { storage, firebase as default };
