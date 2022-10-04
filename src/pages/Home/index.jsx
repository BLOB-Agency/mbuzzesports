import React from "react";
import About from "../../components/About";
import HeroHome from "../../components/HeroHome";
import OurAmbition from "../../components/OurAmbition";
import OurCompany from "../../components/OurCompany";
import "./Home.scss"

const Home = () => {



    return(
        <div>
            <HeroHome />
            <About />
            <section id="about">
            <OurCompany />
            <OurAmbition />
            </section>
            
        </div>
        
    )
}


export default Home;