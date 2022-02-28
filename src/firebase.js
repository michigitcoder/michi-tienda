// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Importacion manual para agregar la funcion q obtiene la instancia de firestore
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_X8GhznTtZZBvZvcQjwmIx2II09Fsng8",
  authDomain: "michitienda-react.firebaseapp.com",
  projectId: "michitienda-react",
  storageBucket: "michitienda-react.appspot.com",
  messagingSenderId: "1058332357309",
  appId: "1:1058332357309:web:33a8e02e277707364ffdd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Exporta la base de datos (db) de firestore para usarla en nuestra app
export const db = getFirestore(app);