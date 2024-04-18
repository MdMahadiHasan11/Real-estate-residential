import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut ,GithubAuthProvider,signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";



export const AuthContext = createContext(null);
const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading]=useState(true);

// 

   

    const ssignInWithPopup = (auth, githubProvider) => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

// 




    const createUser = (email,password,name,photoUrl) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email,password,name,photoUrl);
    }

    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    // const googleSignIn = ()=>{
    //     setLoading(true);
    //     return  signInWithPopup(auth,AuthProvider);
    // }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }


    useEffect( ()=>{
       const unSubscribe =  onAuthStateChanged(auth , currentUser =>{
            console.log('user auth state change ', currentUser);
            setUser(currentUser);
            setLoading(false);

        });
        return ()=>{
            unSubscribe();
        }
    },[])


    const authInfo = {
        user,

        ssignInWithPopup,
        setUser,
        loading,
        createUser,
        signIn,
        logOut
    };



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;