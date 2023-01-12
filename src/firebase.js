import { initializeApp } from "firebase/app";

import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;
const msgSenderID = process.env.REACT_APP_FIREBASE_MSG_SENDER_ID;
const appID = process.env.REACT_APP_FIREBASE_APP_ID;

const firebaseConfig = {
	apiKey: apiKey,
	authDomain: "dummy-backend-1cd2e.firebaseapp.com",
	projectId: "dummy-backend-1cd2e",
	storageBucket: "dummy-backend-1cd2e.appspot.com",
	messagingSenderId: msgSenderID,
	appId: appID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	auth,
	db,
	signOut,
};
