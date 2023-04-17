import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD_IiYQ3qlOXf7IEJZpMN4kl3LbqeS-9J4",
    authDomain: "team-javi.firebaseapp.com",
    projectId: "team-javi",
    storageBucket: "team-javi.appspot.com",
    messagingSenderId: "382036778005",
    appId: "1:382036778005:web:e762006f00f267ec7f821c",
    measurementId: "G-053S9KXWT0"
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, app };