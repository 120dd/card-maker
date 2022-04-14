import './app.css';
import LoginPage from "./components/loginPage/loginPage";
import {BrowserRouter, Route, Switch, useHistory} from "react-router-dom";
import Maker from "./components/makerPage/maker";
import {useState} from "react";

export default function App({authServise, dataControl}) {
    const [isSignup, setIsSignup] = useState(null);
    const [loginedUID, setLoginedUID] = useState();

    const githubClick = () => {
        console.log('ih github');
    }

    const history = useHistory();

    // firebaseAuthService.onAuthStateChanged(
    //     // () =>{
    //     //     console.log('ih')
    //     //     firebaseAuthService.currentUser === null && history.push("home")
    //     // }
    // )

    return (
        <BrowserRouter>
            <div className="page">
                <Switch>
                    <Route exact path={['/', '/home']}>
                        <LoginPage
                            dataControl={dataControl}
                            loginedUID={loginedUID}
                            setLoginedUID={setLoginedUID}
                            authservice={authServise}
                            githubClick={githubClick}
                            setIsSignup={setIsSignup}
                            isSignup={isSignup}
                        />
                    </Route>
                    <Route path="/maker">
                        <Maker
                            authServise={authServise}
                            isSignup={isSignup}
                            setIsSignup={setIsSignup}
                            dataControl={dataControl}
                            loginedUID={loginedUID}
                        />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}
