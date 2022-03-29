import './app.css';
import LoginPage from "./components/loginPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='home' element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
