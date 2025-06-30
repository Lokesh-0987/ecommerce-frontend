// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBdffLcYQcsG8AjXSgq9LY37D7zqPtTcjs",
	authDomain: "vedhika-3eaec.firebaseapp.com",
	projectId: "vedhika-3eaec",
	storageBucket: "vedhika-3eaec.firebasestorage.app",
	messagingSenderId: "602276922770",
	appId: "1:602276922770:web:a476d79499c376084bad4b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
