import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAt3WrTmPQHu7M6ZUK1e8o52iXqKttneH0",
  authDomain: "instagram-clone-react-df4bb.firebaseapp.com",
  projectId: "instagram-clone-react-df4bb",
  storageBucket: "instagram-clone-react-df4bb.appspot.com",
  messagingSenderId: "535131001874",
  appId: "1:535131001874:web:d42fb0486b400df61e34cb"
};

initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
