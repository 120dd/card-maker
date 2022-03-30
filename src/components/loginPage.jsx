import React from 'react';
import styles from './loginPage.module.css';
import logo from  '../assets/logo.png';
import {Link} from "react-router-dom";

const LoginPage = ({ authservice, setIsSignup, }) => {

    const loginGoogle = () =>{
        authservice.loginWithGoogle()
            .then((result)=>{
                setIsSignup(true);
                console.log(result);
            })
            .catch((err)=>{
                alert("로그인에 실패하였습니다 새로고침 후 다시 시도해주세요");
            })
    }

    const onLogin = (e) => {
        // console.log(e.target.childNodes[0].data);
        // authservice.login(e.target.childNodes[0].data)
        //     .then((result)=>{
        //     console.log(result);
        // })
    }

    const onLogout = (e) => {

    }

    return(
        <main className={styles.loginPage}>
            <div className={styles.contents}>
                <header className={styles.header}>
                    {1 && <button onClick={onLogout}>logout</button>}
                    <img src={logo} alt='logo' className={styles.header_logo} />
                    <h1 className={styles.header_name}>Business Card Maker</h1>
                </header>
                <section>
                    <h2>Login</h2>
                    <ul>
                        <li>
                            <Link to="/home">
                            <button onClick={loginGoogle}>
                                Google
                            </button>
                            </Link>
                        </li>
                        <li>
                            <button onClick={onLogin}>Github</button>
                        </li>
                    </ul>
                </section>
                <footer>
                    <p>Made by chris</p>
                </footer>
            </div>
        </main>
    )
};

export default LoginPage;