import React from 'react';
import styles from './loginPage.module.css';
import {Link, useHistory} from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";

const LoginPage = ({authservice, setIsSignup, isSignup}) => {
    const history = useHistory();

    const loginGoogle = () => {
        authservice.loginWithGoogle()
            .then((result) => {
                console.log(result);
                setIsSignup(true);
                return history.push("/maker", {uid: result.user.uid});
            })
            .catch((err) => {
                alert("로그인에 실패하였습니다 새로고침 후 다시 시도해주세요");
            })
    }

    return (
        <main className={styles.loginPage}>
            <div className={styles.contents}>
                <Header isSignup={isSignup}/>
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
                            <button>Github</button>
                        </li>
                    </ul>
                </section>
                <Footer/>
            </div>
        </main>
    )
};

export default LoginPage;