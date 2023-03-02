// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";
const serviceAccount = require("./lib/serviceAccountKey.json");

const firebaseConfig = {
  apiKey: "AIzaSyDP08FIxWIJkQIr0yRYeqRUSWgpycSWyJM",
  authDomain: "notus-nextjs-wsa-tokengate.firebaseapp.com",
  projectId: "notus-nextjs-wsa-tokengate",
  storageBucket: "notus-nextjs-wsa-tokengate.appspot.com",
  messagingSenderId: "422959475575",
  appId: "1:422959475575:web:3a523b36c70a43d6f04f72",
  measurementId: "G-BEM4JL37BT",
};

const app = !getApps().length
  ? initializeApp({
      credential: cert(serviceAccount),
    })
  : getApp();
const db = getFirestore(app);
const auth = getAuth(app);

export { app, auth, db };
