import React from 'react';
import styles from './loginPage.module.css';
import logo from  '../assets/logo.png';

const LoginPage = (props) => {
    return(
        <main className={styles.loginPage}>
            <div className={styles.contents}>
                <header className={styles.header}>
                    <img src={logo} alt='logo' className={styles.header_logo} />
                    <h1 className={styles.header_name}>Business Card Maker</h1>
                </header>
                <section>
                    <h2>Login</h2>
                    <button>Google</button>
                    <button>Github</button>
                </section>
                <footer>
                    <p>Made by chris</p>
                </footer>
            </div>
        </main>
    )
};

export default LoginPage;