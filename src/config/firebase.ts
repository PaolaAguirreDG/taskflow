import { getApps, initializeApp } from 'firebase/app'
//@ts-ignore
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const persistence = getReactNativePersistence(ReactNativeAsyncStorage);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTsfa9kR9aLy2hYccCNLfi2zGGrkKE-uE",
  authDomain: "taskflow-paola-2026.firebaseapp.com",
  projectId: "taskflow-paola-2026",
  storageBucket: "taskflow-paola-2026.firebasestorage.app",
  messagingSenderId: "133474261422",
  appId: "1:133474261422:web:e3ddcd15b29fa02f71103f"
};

// Initialize Firebase
const app =
  getApps().length === 0
    ? initializeApp(firebaseConfig)
    : getApps()[0]

const auth = initializeAuth(app, {
  persistence
});

export { auth }

export const db = getFirestore(app)

export default app