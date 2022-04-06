import React from 'react';
import logo from "../../assets/logo.png";
import styles from "./header.module.css";

const Header = ({isSignup, authServise }) => {

    const onLogout = () => {
        console.log('logout!');
        console.log(authServise);
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