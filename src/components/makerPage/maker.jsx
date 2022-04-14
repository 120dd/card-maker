import React, {useEffect, useState} from 'react';
import {useHistory, useLocation} from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./maker.module.css";
import Cardmaker from "../cardmaker/cardmaker";
import CardPreview from "../cardPreview/cardPreview";
import default_logo from "../../assets/default_logo.png";

const Maker = ({isSignup, setIsSignup, authServise, dataControl, loginedUID}) => {

    const history = useHistory();

    const onCheck = () => {
        if (isSignup !== true) {
            authServise.logoutWithGoogle();
            history.push('/');
        }
    }

    useEffect(onCheck, [isSignup]);

    const [cards, setCards] = useState([
            {
                id: 1,
                name: 'Chris',
                email: 'abc@gmail.com',
                color: 'black',
                workplace: 'porche',
                position: 'coder',
                comments: '열심히 공부중',
                img: default_logo,
                imgFileName: 'no image',
            },
            {
                id: 2,
                name: '2Chris',
                email: 'abc@gmail.com',
                color: 'black',
                workplace: 'porche',
                position: 'coder',
                comments: '열심히 공부중',
                img: default_logo,
                imgFileName: 'no image',
            },
            {
                id: 3,
                name: '3Chris',
                email: 'abc@gmail.com',
                color: 'black',
                workplace: 'porche',
                position: 'coder',
                comments: '열심히 공부중',
                img: default_logo,
                imgFileName: 'no image',
            },
        ]
    );

    const getUserInfo = () => {
         dataControl.readUserData(loginedUID,(res)=>setCards(res.data));
    }

    useEffect(getUserInfo,[]);


    return (
        <div className={styles.maker}>
            <button onClick={getUserInfo}>11</button>
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