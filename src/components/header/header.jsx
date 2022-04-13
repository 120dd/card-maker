import React from 'react';
import logo from "../../assets/logo.png";
import styles from "./header.module.css";
import {firebaseAuthService, firebaseDataservice} from "../../survices/firebase";

const Header = ({isSignup, setIsSignup, authServise, loginedUID }) => {

    const onLogout = () => {
        authServise.logoutWithGoogle()
            .then(setIsSignup(null))
            .catch(err=>alert('로그아웃실패'))
    }


    // const onCheck = () => authServise.checkUser();
    const onCheck = () => {
        console.log(firebaseAuthService.currentUser);
    }

    return (
        <header className={styles.header}>
            {isSignup && <button onClick={onLogout}>logout</button>}
            <img src={logo} alt='logo' className={styles.header_logo}/>
            <h1 className={styles.header_name}>Business Card Maker</h1>
            <button onClick={onCheck}>ooo</button>
            <span>{loginedUID}</span>
        </header>
    )
};

export default Header;