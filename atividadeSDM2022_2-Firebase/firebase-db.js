// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClCLlkbm2V7Y4JptVn3-Qw_SBrecOsE-A",
    authDomain: "produtos-b2eca.firebaseapp.com",
    projectId: "produtos-b2eca",
    storageBucket: "produtos-b2eca.appspot.com",
    messagingSenderId: "762468385191",
    appId: "1:762468385191:web:fa5fb54f1edf4e25ba3682",
    measurementId: "G-9EG0KQ8T7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get a reference to the database service
const database = getDatabase(app);

export default database


