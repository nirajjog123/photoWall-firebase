import * as firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyC_uQdxMFb1qugIZ9aHO5EChfG8wTnooWg",
    authDomain: "photowall-eeb7b.firebaseapp.com",
    databaseURL: "https://photowall-eeb7b-default-rtdb.firebaseio.com",
    projectId: "photowall-eeb7b",
    storageBucket: "photowall-eeb7b.appspot.com",
    messagingSenderId: "285094553785",
    appId: "1:285094553785:web:3f9f823e7f7c28ef98d368",
    measurementId: "G-397WP6TVSE"
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  export {database}