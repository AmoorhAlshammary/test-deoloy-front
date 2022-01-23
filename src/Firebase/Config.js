import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

    const firebaseConfig = {
      apiKey: "AIzaSyBeLx9MvpBu6YRkaIvReW0cKNwW6yfQmvQ",
      authDomain: "decoration-8a212.firebaseapp.com",
      projectId: "decoration-8a212",
      storageBucket: "decoration-8a212.appspot.com",
      messagingSenderId: "228341862046",
      appId: "1:228341862046:web:af626fa868e1165410b58f"
    };
    
// Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  
  const base = firebase.storage() ;
  const A = firebase.firestore();

  export  {base,A};