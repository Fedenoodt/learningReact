import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD-yWFw9FNmLEF9SzTu8OxPZpYNEaEVl98",
    authDomain: "myapp-1fc9d.firebaseapp.com",
    projectId: "myapp-1fc9d",
    storageBucket: "myapp-1fc9d.appspot.com",
    messagingSenderId: "172659416297",
    appId: "1:172659416297:web:556a0abe4c29ae70eae478"
  };
  

firebase.initializeApp(firebaseConfig);

export default firebase;