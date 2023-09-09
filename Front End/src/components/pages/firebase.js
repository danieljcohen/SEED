// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
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
const db = getDatabase();

export function addCompanyProfile(companyName, bio, website, fundingAmount, equityOffered, Location, companyImage, tags) {
    const db = getDatabase();
    set(ref(db, 'companies/' + companyName), {
        bio: bio,
        website: website,
        fundingAmount: fundingAmount,
        equityOffered: equityOffered,
        Location: Location,
        companyImage: companyImage,
        tags: tags
    });
}



const email = ref(db, 'users/1/email');
onValue(email, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
});
