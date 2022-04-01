import './app.css';
import LoginPage from "./components/loginPage/loginPage";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Maker from "./components/makerPage/maker";
import {useState} from "react";

export default function App({authServise}) {
    const [isSignup, setIsSignup] = useState(null);

    const githubClick = () => {
        console.log('ih github');
    }

    return (
        <BrowserRouter>
            <div className="page">
                <Switch>
                    <Route exact path={['/','/home']}>
                        <LoginPage
                            authservice={authServise}
                            githubClick={githubClick}
                            setIsSignup={setIsSignup}
                            isSignup={isSignup}
                        />
                    </Route>
                    <Route path="/maker">
                        <Maker isSignup={isSignup} />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}
