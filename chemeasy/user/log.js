import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {getAuth, signOut, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDeBGEQwqSqDugnuO2b3adGQcS9Sh4kGnU",
  authDomain: "chem-easy.firebaseapp.com",
  projectId: "chem-easy",
  storageBucket: "chem-easy.appspot.com",
  messagingSenderId: "49916563669",
  appId: "1:49916563669:web:63ceb4dd56e398c1e8d25c",
  measurementId: "G-8X5W0Z4S04"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, function (user) {
    if (user) {
        const currentUser = auth.currentUser;
        document.getElementById("userEmail").textContent = currentUser.email;
        document.getElementById("userName2").textContent = currentUser.displayName;
        document.getElementById("userProfilePicture2").src = currentUser.photoURL;
    } else {
        window.location.href = "../index.html";
    }
});

const logout = document.getElementById("logout");
logout.addEventListener("click", function (event) {
    event.preventDefault();
    signOut(auth).then(
        function () {
            alert("Logging out...");
            window.location.href = "../index.html";
        }
    ).catch(function () {
        alert("Error, can't logout...");
    });
});