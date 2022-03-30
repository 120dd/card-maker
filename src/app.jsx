import './app.css';
import LoginPage from "./components/loginPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home";
import {useState} from "react";

function App({authServise}) {
    // const [email,setEmail] =useState();
    // const [password,setPassword] =useState();
    const [isSignup, setIsSignup] = useState(false);

    // const signInWithGoogle = () => {
    //     const provider = new GoogleAuthProvider();
    //     signInWithPopup(authService, provider)
    //         .then((result)=>{
    //             console.log(result);
    //         })
    //         .catch((err)=>{
    //             alert("로그인에 실패하였습니다 새로고침 후 다시 시도해주세요");
    //         })
    // }

    const githubClick = () => {
        console.log('ih github');
    }


    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <LoginPage
                        authservice={authServise}
                        githubClick={githubClick}
                        setIsSignup={setIsSignup}
                    />}/>
                <Route path='home' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
