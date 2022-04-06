import React, {useEffect, useState} from 'react';
import {useHistory, useLocation} from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./maker.module.css";
import Cardmaker from "../cardmaker/cardmaker";
import CardPreview from "../cardPreview/cardPreview";
import default_logo from "../../assets/default_logo.png";

const Maker = ({isSignup, setIsSignup, authServise}) => {

    const history = useHistory();

    useEffect(() => isSignup === false ? history.push('/') : console.log('로그인되었습니다'), [])
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
            },
            {
                id: 2,
                name: 'jh',
                email: 'jhjh@gmail.com',
                color: 'pink',
                workplace: 'abcMart',
                position: 'designer',
                comments: '세계 최고의 디자이너',
                img: default_logo,
            },
            {
                id: 3,
                name: 'Chris',
                email: 'abc@gmail.com',
                color: 'red',
                workplace: 'porche',
                position: 'coder',
                comments: '열심히 공부중',
                img: default_logo,
            },
        ]
    );
    const location = useLocation();
    return (
        <div className={styles.maker}>
            <Header
                authServise={authServise}
                isSignup={isSignup}
                setIsSignup={setIsSignup}
            />
            <div className={styles.container}>
                <section className={styles.contents}>
                    <Cardmaker cards={cards} setCards={setCards}/>
                    <CardPreview cards={cards}/>
                </section>
            </div>
            <Footer/>
        </div>
    )
};

export default Maker;