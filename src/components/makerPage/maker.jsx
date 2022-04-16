import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./maker.module.css";
import Cardmaker from "../cardmaker/cardmaker";
import CardPreview from "../cardPreview/cardPreview";

const Maker = ({isSignup, setIsSignup, authServise, dataControl, loginedUID}) => {

    const history = useHistory();

    const onCheck = () => {
        if (isSignup !== true) {
            authServise.logoutWithGoogle();
            history.push('/');
        }
    }

    useEffect(onCheck, [isSignup]);

    const [cards, setCards] = useState([]);

    const updateUserInfo = () => {
         dataControl.readUserData(loginedUID,(res)=>setCards(res.data));
    }

    useEffect(updateUserInfo,[]);

    return (
        <div className={styles.maker}>
            <Header
                dataControl={dataControl}
                loginedUID={loginedUID}
                authServise={authServise}
                isSignup={isSignup}
                setIsSignup={setIsSignup}
            />
            <div className={styles.container}>
                <section className={styles.contents}>
                    <Cardmaker
                        updateUserInfo={updateUserInfo}
                        cards={cards}
                        setCards={setCards}
                        dataControl={dataControl}
                        loginedUID={loginedUID}
                    />
                    <CardPreview cards={cards}/>
                </section>
            </div>
            <Footer/>
        </div>
    )
};

export default Maker;