// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAPU8E37wxO031vKegZpgvo2Y0tyuBO96c",
	authDomain: "vedhika-61c9f.firebaseapp.com",
	projectId: "vedhika-61c9f",
	storageBucket: "vedhika-61c9f.firebasestorage.app",
	messagingSenderId: "612091745025",
	appId: "1:612091745025:web:7d9c207af4aec4daf14100",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
VITE_FIREBASE_API_KEY = "AIzaSyAPU8E37wxO031vKegZpgvo2Y0tyuBO96c";
VITE_FIREBASE_AUTH_DOMAIN = "vedhika-61c9f.firebaseapp.com";
VITE_FIREBASE_PROJECT_ID = "vedhika-61c9f";
VITE_FIREBASE_STORAGE_BUCKET = "vedhika-61c9f.firebasestorage.app";
VITE_FIREBASE_MESSAGING_SENDER_ID = "612091745025";
VITE_FIREBASE_APP_ID = "1:612091745025:web:7d9c207af4aec4daf14100";
