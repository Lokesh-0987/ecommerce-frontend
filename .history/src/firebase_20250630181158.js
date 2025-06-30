// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyC2o65BiOkeR9P6G_x_DmKOiy6p-cVzFro",
	authDomain: "vedhika-79c37.firebaseapp.com",
	projectId: "vedhika-79c37",
	storageBucket: "vedhika-79c37.firebasestorage.app",
	messagingSenderId: "321841598303",
	appId: "1:321841598303:web:c21da0537eef08daaaf0ea",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
