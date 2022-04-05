import React, {Fragment} from 'react';
import {useLocation} from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./maker.module.css";
import Cardmaker from "../cardmaker/cardmaker";
import CardPreview from "../cardPreview/cardPreview";

const Maker = ({isSignup,cards, setCards}) => {
    const location = useLocation();
    return (
        <div className={styles.maker}>
            <Header isSignup={isSignup}/>
            <div className={styles.container}>
                <section className={styles.contents}>
                    <Cardmaker cards={cards} setCards={setCards} />
                    <CardPreview cards={cards} />
                </section>
            </div>
            <Footer/>
        </div>
    )
};

export default Maker;