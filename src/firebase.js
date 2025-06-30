// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAPU8E37wxO031vKegZpgvo2Y0tyuBO96c",
  authDomain: "vedhika-61c9f.firebaseapp.com",
  projectId: "vedhika-61c9f",
  storageBucket: "vedhika-61c9f.firebasestorage.app",
  messagingSenderId: "612091745025",
  appId: "1:612091745025:web:fb29263a3744c475f14100"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
