import React from 'react';
import logo from "../../assets/logo.png";
import styles from "./header.module.css";

const Header = ({isSignup, setIsSignup, authServise, loginedUID, dataControl}) => {

    const onLogout = () => {
        authServise.logoutWithGoogle()
            .then(setIsSignup(null))
            .catch(err => alert('로그아웃실패'))
    }

    return (
        <header className={styles.header}>
            {isSignup && <button onClick={onLogout}>logout</button>}
            <img src={logo} alt='logo' className={styles.header_logo}/>
            <h1 className={styles.header_name}>Business Card Maker</h1>
        </header>
    )
};

export default Header;