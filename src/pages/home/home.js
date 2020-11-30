import React from "react";
import CategoryCard from "../../components/categoryCard/categoryCard.js";
import Card from "../../components/card/card.js";
import FloatingButton from "../../components/floatingButton/floatingButton.js";
import Navbar from "../../components/navbar/navbar.js";
import DB_CONFIG from "../../Config/config.js";
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB31F8PqUT0WINGgA4hBRUO7jlz_3iP_TQ",
  authDomain: "qr-menu-mobile.firebaseapp.com",
  projectId: "qr-menu-mobile",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function Home() {
  var list = [];

  var variable = firebase.firestore().collection("Orders");

  var items = 
  {
    0: { name: "Kerhane Tatlısı", price: "55" },
    1: { name: "Kerhane ısı", price: "55" },
    2: { name: "Kerhe Tatlısı", price: "55" },
  };

  return (
    <div className="home-wrapper">
      {variable.get().then(function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
          var id = childSnapshot.id;
          var data = childSnapshot.data();
          <Card 
            name = {data.orderType}
            price = {data.tableNumber}
          />
        });
      })}
      <Navbar />
      <CategoryCard />
      <h2>Hamburger</h2>

      <FloatingButton />
    </div>
  );
}

export default Home;
