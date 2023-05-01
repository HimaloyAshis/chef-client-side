// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH72KkeiVQyXHfxXNMVYqG0rmEHAD5NZg",
  authDomain: "chef-authentication.firebaseapp.com",
  projectId: "chef-authentication",
  storageBucket: "chef-authentication.appspot.com",
  messagingSenderId: "191891135485",
  appId: "1:191891135485:web:305ab71def1860fa591794"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;