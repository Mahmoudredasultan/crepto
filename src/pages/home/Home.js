import React from "react";
import Intreduse from "../../componantes/intreduse/Intreduse";
import Compones from "../../componantes/compones/Compones";
import Features from "../../componantes/features/Features";
import Sales from "../../componantes/sales/Sales";
import Roadmap from "../../componantes/roadmap/Roadmap";
import Team from "../../componantes/team/Team";
import Clint from "../../componantes/clint/Clint";
import Applcation from "../../componantes/applcation/Applcation";
import Faq from "../../componantes/faq/Faq";
import News from "../../componantes/news/News";
import Contact from "../../componantes/contact/Contact";

const Home = () => {
    return (
        <div className="home">
            <Intreduse />
            <Compones />
            <Features />
            <Sales />
            <Roadmap />
            <Team />
            <Clint />
            <Applcation />
            <Faq />
            <News />
            <Contact />
        </div>
    );
};

export default Home;
