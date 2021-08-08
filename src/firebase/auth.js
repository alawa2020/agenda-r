import firebase from "firebase";
import 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbJEiCfhgueAlRKw_-9Hl2BH5WSKdeA5Y",
    authDomain: "agenda-react-fdc3a.firebaseapp.com",
    projectId: "agenda-react-fdc3a",
    storageBucket: "agenda-react-fdc3a.appspot.com",
    messagingSenderId: "1043824701957",
    appId: "1:1043824701957:web:aab10eadb79e55f66e226c"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  const {auth} = fire.auth();