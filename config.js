import firebase from "firebase";
require("@firebase/firestore");


  const firebaseConfig = {
    apiKey: "AIzaSyAArzcATzvLzsBUViHyfeg6ySXaXsXcD_8",
    authDomain: "bicicreta-ed376.firebaseapp.com",
    projectId: "bicicreta-ed376",
    storageBucket: "bicicreta-ed376.appspot.com",
    messagingSenderId: "127542268495",
    appId: "1:127542268495:web:c267804e2850ac6e7c503a"
  };
  
  
  


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
