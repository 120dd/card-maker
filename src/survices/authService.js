import { firebaseAuthService } from "./firebase";
import {signInWithPopup, GoogleAuthProvider} from "firebase/auth";
// import { authService } from 'fbase'

class AuthService {
    loginWithGoogle(){
        const provider = new GoogleAuthProvider();
        return  signInWithPopup(firebaseAuthService, provider);
    }

    logout(){

    }
}

export default AuthService;