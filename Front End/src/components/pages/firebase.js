// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";


import { getDatabase, ref as dbRef, set, onValue } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
import {getStorage, ref as storageRef, uploadBytes, getDownloadURL} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyABkqTffqOzHQxtwqb1XN4VJXDEkyfC0qw",
    authDomain: "hackathon-82a7f.firebaseapp.com",
    projectId: "hackathon-82a7f",
    storageBucket: "hackathon-82a7f.appspot.com",
    messagingSenderId: "929261711968",
    appId: "1:929261711968:web:a553f67277f64c023c0905",
    measurementId: "G-N9M2R2K0HP",
    databaseURL: "https://hackathon-82a7f-default-rtdb.firebaseio.com/"
};

console.log("test");

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase();

export async function addCompanyProfile(
    companyName,
    bio,
    website,
    fundingAmount,
    equityOffered,
    Location,
    companyImage,
    tags
  ) {
    const db = getDatabase();
    let url = "placeholder";
  
    try {
      const reference = await addImgUrl(companyImage, companyName);
      url = await getUrl(reference);
  
      const dbReference = dbRef(db, 'companies/' + companyName);
      await set(dbReference, {
        bio: bio,
        website: website,
        fundingAmount: fundingAmount,
        equityOffered: equityOffered,
        Location: Location,
        Image: url,
        tags: tags
    });
}

export function getCurrentUser() {
    return auth.currentUser;
  }

  

export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword};  // Add `auth` here

export function checkIfUserAuthenticated() {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            unsubscribe(); // Stop listening for changes after first response
            if (user) {
                resolve(user); // User is authenticated
            } else {
                resolve(null); // User is not authenticated
            }
        }, error => {
            reject(error); // An error occurred while checking authentication
        });
    });
}

let dbData = null;
const newCompany = dbRef(db, 'companies');
onValue(newCompany, (snapshot) => {
    const dbData = snapshot.val();
    console.log(dbData);
    
});
export default dbData;
