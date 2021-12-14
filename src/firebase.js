import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDG8v1_2ZXigOFkwxLv_ra9Z9iNuKdCM1g",
    authDomain: "internportal-83cb2.firebaseapp.com",
    databaseURL: "https://internportal-83cb2-default-rtdb.firebaseio.com",
    projectId: "internportal-83cb2",
    storageBucket: "internportal-83cb2.appspot.com",
    messagingSenderId: "696144772473",
    appId: "1:696144772473:web:6ff8a0bbb469206ab1c3a8",
    measurementId: "G-F3PG10XY6D",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

export const logout = () => {
    auth.signOut();
};

export { app, auth, db };
