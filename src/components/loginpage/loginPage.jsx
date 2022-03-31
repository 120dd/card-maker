import React from 'react';
import styles from './loginPage.module.css';
import logo from '../../assets/logo.png';
import {useNavigate, } from "react-router-dom";

const LoginPage = ({ authservice, setIsSignup,isSignup, }) => {

    let navigate = useNavigate();

    const goToMaker = (user) => {
        console.log(user);
        // navigate('/maker', {state:{id:user}})
    }

    const loginGoogle = () =>{
        // navigate("/maker");
        authservice.loginWithGoogle()
            .then((result)=>{
                console.log(result);
                return goToMaker(result);
            })
            .catch((err)=>{
                alert("로그인에 실패하였습니다 새로고침 후 다시 시도해주세요");
            })
    }

    const onLogin = (e) => {

    }

    const onLogout = (e) => {

    }

    return(
        <main className={styles.loginPage}>
            <div className={styles.contents}>
                <header className={styles.header}>
                    {isSignup && <button onClick={onLogout}>logout</button>}
                    <img src={logo} alt='logo' className={styles.header_logo} />
                    <h1 className={styles.header_name}>Business Card Maker</h1>
                </header>
                <section>
                    <h2>Login</h2>
                    <ul>
                        <li>
                            <button onClick={loginGoogle}>
                                Google
                            </button>
                        </li>
                        <li>
                            <button onClick={()=>{navigate("/testpage")}}>Github</button>
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