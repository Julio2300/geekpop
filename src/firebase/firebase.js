import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGg6LSyQW8bFlxZzRp5xUd7hRqyI0Oj6s",
  authDomain: "geekpop.firebaseapp.com",
  projectId: "geekpop",
  storageBucket: "geekpop.appspot.com",
  messagingSenderId: "144849979662",
  appId: "1:144849979662:web:dd20854dce1b339a942f5f"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export async function getItems() {
  const response = await getDocs(collection(db, 'items'));
  const listaItems = [];
  response.forEach((docu) => listaItems.push({ id: docu.id, ...docu.data() }));
  return listaItems;
}


export async function sendOrderToFirebase(order) {
  try {
    const db = getFirestore(app);
    const ordersCollectionRef = collection(db, "orders");
    await addDoc(ordersCollectionRef, order);
    console.log("Order successfully sent to Firebase!");
  } catch (error) {
    throw new Error("Error sending order to Firebase: ", error);
  }
}