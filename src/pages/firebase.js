// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8u8ez4Dp6PLrJbbr6FA1-a6VWKNvI9YY",
  authDomain: "inbound-fulcrum-396809.firebaseapp.com",
  databaseURL: "https://inbound-fulcrum-396809-default-rtdb.firebaseio.com",
  projectId: "inbound-fulcrum-396809",
  storageBucket: "inbound-fulcrum-396809.appspot.com",
  messagingSenderId: "153492128619",
  appId: "1:153492128619:web:7cbe7f1a5e3976919a822e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
