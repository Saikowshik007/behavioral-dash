import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Log the config to verify environment variables are loaded
console.log('Firebase Config:', {
  projectId: firebaseConfig.projectId,
  authDomain: firebaseConfig.authDomain
});

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore
const db = getFirestore(app);

// Log successful initialization
console.log('Firestore initialized');

// Initialize collections with logging
const questionsCollection = collection(db, 'data');
console.log('Questions collection reference created');

export { db, questionsCollection };