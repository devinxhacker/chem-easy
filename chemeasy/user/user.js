import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

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
auth.languageCode = "en";
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function(event){
  event.preventDefault();
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.history.back();
    alert("Login Sussessful!");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
  });
})
