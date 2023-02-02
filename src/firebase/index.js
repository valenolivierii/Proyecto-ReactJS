
import { initializeApp } from "firebase/app"
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyqonc14SvLd86iD-Y9tWfO6zwlIYU6nc",
  authDomain: "ecommerce-phonestation.firebaseapp.com",
  projectId: "ecommerce-phonestation",
  storageBucket: "ecommerce-phonestation.appspot.com",
  messagingSenderId: "350117311504",
  appId: "1:350117311504:web:c8f9b5fdeb0afbb3894695"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);