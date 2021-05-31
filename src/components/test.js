import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("HpKbAKGqca4Q1ZeeGhyz")
  .collection("cartItems")
  .doc("H363wekWVByS5oJ473j7");

firestore.doc("/users/HpKbAKGqca4Q1ZeeGhyz/cartItems/H363wekWVByS5oJ473j7");
firestore.collection("/users/HpKbAKGqca4Q1ZeeGhyz/cartItems");