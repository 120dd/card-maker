import './app.css';
import LoginPage from "./components/loginPage/loginPage";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Maker from "./components/makerPage/maker";
import {useState} from "react";
import default_logo from './assets/default_logo.png';

export default function App({authServise}) {
    const [isSignup, setIsSignup] = useState(null);
    const [cards, setCards] = useState([
            {
                id: 1,
                name: 'Chris',
                email: 'abc@gmail.com',
                color: 'black',
                workplace: 'porche',
                position: 'coder',
                coments: '열심히 공부중',
                img: default_logo,
            },
            {
                id: 2,
                name: 'jh',
                email: 'jhjh@gmail.com',
                color: 'pink',
                workplace: 'abcMart',
                position: 'designer',
                coments: '세계 최고의 디자이너',
                img: default_logo,
            },
            {
                id: 3,
                name: 'Chris',
                email: 'abc@gmail.com',
                color: 'red',
                workplace: 'porche',
                position: 'coder',
                coments: '열심히 공부중',
                img: default_logo,
            },
        ]
    );

    const githubClick = () => {
        console.log('ih github');
    }

    return (
        <BrowserRouter>
            <div className="page">
                <Switch>
                    <Route exact path={['/', '/home']}>
                        <LoginPage
                            authservice={authServise}
                            githubClick={githubClick}
                            setIsSignup={setIsSignup}
                            isSignup={isSignup}
                        />
                    </Route>
                    <Route path="/maker">
                        <Maker
                            isSignup={isSignup}
                            cards={cards}
                            setCards={setCards}
                        />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}
