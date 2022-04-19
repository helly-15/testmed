import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

import firebase from 'firebase/app';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const cloudFunctions = firebase.functions();
export const db = firebase.firestore();

// Firebase emulator setup
if (process.env.REACT_APP_USE_FIREBASE_EMULATOR?.toLowerCase() === 'true') {
  db.settings({
    host: 'localhost:8088',
    ssl: false
  });
  firebase.functions().useFunctionsEmulator('http://localhost:5001');
}

/** Adds clinician role to the current user, cloud function */
export const addClinicianRole: () => Promise<firebase.functions.HttpsCallableResult> = () =>
  cloudFunctions.httpsCallable('addClinicianRole')();

/** Adds patient role to the current user, cloud function */
export const addPatientRole: () => Promise<firebase.functions.HttpsCallableResult> = () =>
  cloudFunctions.httpsCallable('addPatientRole')();
