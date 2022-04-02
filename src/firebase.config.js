// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAuMbmTlIXSEIfiJqDwJ0wSLsySzmFD-jc',
  authDomain: 'house-marketplace-react-d74e7.firebaseapp.com',
  projectId: 'house-marketplace-react-d74e7',
  storageBucket: 'house-marketplace-react-d74e7.appspot.com',
  messagingSenderId: '441071782192',
  appId: '1:441071782192:web:f8d149f61c599ed12860f5',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
