// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// import * as firebase from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_STOREFRONT_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_STOREFRONT_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_STOREFRONT_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_STOREFRONT_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STOREFRONT_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:
    process.env.REACT_APP_STOREFRONT_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_STOREFRONT_FIREBASE_APP_ID,
};

// Initialize Firebase Services
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app);
// const auth = firebase();

// export the service objects
export { app, auth, db, storage };
