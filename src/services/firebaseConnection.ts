import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxfvMHHQNzQ9oTx8ILZuX5qtViNfS0O2o",
  authDomain: "tarefasplus-e7c51.firebaseapp.com",
  projectId: "tarefasplus-e7c51",
  storageBucket: "tarefasplus-e7c51.appspot.com",
  messagingSenderId: "867642870836",
  appId: "1:867642870836:web:1b4967a4b67d0cd2010e61",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db };
