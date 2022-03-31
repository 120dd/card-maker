import './app.css';
import LoginPage from "./components/loginpage/loginPage";
import { Route, Routes} from "react-router-dom";
import Maker from "./components/maker/maker";
import {useState} from "react";
import TestPage from "./components/testPage";

function App({authServise}) {

    const [isSignup, setIsSignup] = useState(false);

    const githubClick = () => {
        console.log('ih github');
    }

    return (
        <Routes>
            <Route path='/' element={
                <LoginPage
                    authservice={authServise}
                    githubClick={githubClick}
                    setIsSignup={setIsSignup}
                    isSignup={isSignup}
                />}/>
            <Route path="/maker" element={<Maker/>}/>
            <Route path="/testpage" element={<TestPage/>}/>
            <Route path="*" element={<div>error!</div>}/> //에러
        </Routes>
    );
}

export default App;