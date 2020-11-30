import React from "react";
import CategoryCard from "../../components/categoryCard/categoryCard.js";
import Card from "../../components/card/card.js"
import FloatingButton from "../../components/floatingButton/floatingButton.js"
import Navbar from "../../components/navbar/navbar.js"

function Home() {
    return (
        <div className="home-wrapper">
            <Navbar />
            <CategoryCard />
            <h2>Hamburger</h2>
            <Card />
            <Card />
            <FloatingButton />
        </div>
    );
}

export default Home;
