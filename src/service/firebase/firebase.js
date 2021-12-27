import * as firebase from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDAmpQfblPJzc8dDj8zO3OVB5PMQtP4LEg",
    authDomain: "react-app-coder-cc6dd.firebaseapp.com",
    projectId: "react-app-coder-cc6dd",
    storageBucket: "react-app-coder-cc6dd.appspot.com",
    messagingSenderId: "1083532784574",
    appId: "1:1083532784574:web:c69e0575dff82c3203bfef"
};

const app = firebase.initializeApp(firebaseConfig);

export const db = getFirestore(app);