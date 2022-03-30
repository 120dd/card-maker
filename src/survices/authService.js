import { firebaseAuthService } from "./firebase";
import {signInWithPopup, GoogleAuthProvider} from "firebase/auth";

class AuthService {
    loginWithGoogle(){
        const provider = new GoogleAuthProvider();
        return  signInWithPopup(firebaseAuthService, provider);
    }
}

export default AuthService;