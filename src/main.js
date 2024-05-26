import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ18sGJVJuQqwKk_ZHbgo8RjYkdN7C6BA",
  authDomain: "github-profile-io.firebaseapp.com",
  projectId: "github-profile-io",
  storageBucket: "github-profile-io.appspot.com",
  messagingSenderId: "762522928882",
  appId: "1:762522928882:web:b502499bf931e571a9726b",
  measurementId: "G-2SZETPX22R"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase_app);

const app = createApp(App)

app.use(router)

app.mount('#app')
