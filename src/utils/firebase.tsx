// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBsQiHAZLHrb52sY6-4ABdvyl06RXH3_6s',
  authDomain: 'todo-app-8c3d7.firebaseapp.com',
  projectId: 'todo-app-8c3d7',
  storageBucket: 'todo-app-8c3d7.appspot.com',
  messagingSenderId: '1072653221449',
  appId: '1:1072653221449:web:ba6e1c0693487b21968998',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

// On récupére la base de données firestore
export const db = getFirestore()
