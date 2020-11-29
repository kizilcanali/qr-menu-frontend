import React from "react";
import CategoryCard from "../../components/categoryCard/categoryCard.js";
import Card from "../../components/card/card.js"
import FloatingButton from "../../components/floatingButton/floatingButton.js"
import Navbar from "../../components/navbar/navbar.js"
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg"
import searchIcon from "../../assets/icons/search.svg"
import { Image, Icon, Grid } from "semantic-ui-react"
import Input from "../../components/input_fields/input.js"

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
