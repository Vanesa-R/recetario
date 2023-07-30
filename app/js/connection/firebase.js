import { initializeApp } from "firebase/app";
// import { getFirestore } from "@firebase/firestore";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";


// Configuración de firebase
const firebaseConfig = {
 apiKey: "AIzaSyCrLjKopGKAKM_u3RmQUrGXOwrr4iEW_1s",
 authDomain: "recetas-mama.firebaseapp.com",
 projectId: "recetas-mama",
 storageBucket: "recetas-mama.appspot.com",
 messagingSenderId: "441253385998",
 appId: "1:441253385998:web:91ebd1bef616aefc3ea95f",
 measurementId: "G-Z11TV2TE49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app)

// Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);

// Initialize Cloud Storage and get a reference to the service
// const storage = getStorage(app);