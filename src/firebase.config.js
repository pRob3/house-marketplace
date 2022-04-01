import { initializeApp } from 'firebase/app'
import { getFireStore } from 'firebase/firestore'

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
export const db = getFireStore()
