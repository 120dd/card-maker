import React from 'react';
import logo from "../../assets/logo.png";
import styles from "./header.module.css";

const Header = ({isSignup, setIsSignup, authServise, loginedUID, dataControl}) => {

    const onLogout = () => {
        authServise.logoutWithGoogle()
            .then(setIsSignup(null))
            .catch(err => alert('로그아웃실패'))
    }

    // const getData =  async () => {
    //     const data = new DataControl();
    //     return data.readUserData("pfqxf4EVEwY71mO903ZIodSKe3Z2");
    // }


    return (
        <header className={styles.header}>
            {isSignup && <button onClick={onLogout}>logout</button>}
            <img src={logo} alt='logo' className={styles.header_logo}/>
            <h1 className={styles.header_name}>Business Card Maker</h1>
            {/*<button onClick={onCheck}>ooo</button>*/}
            <span>{loginedUID}</span>
        </header>
    )
};

export default Header;