import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  updateProfile } from "firebase/auth";
import { auth } from "../../firebase.config";

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userName, setUserName] = useState(null) ;
    const [userPhoto, setUserPhoto] = useState(null) ;
    const googleProvider = new GoogleAuthProvider();

    // create user 
    const signUp = (email, pass) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    // login user
    const loginUser = (email, pass) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass);
    }

    // sign out user 
    const signOutUser = () => {
        setLoading(true) ;
        return signOut(auth) ;
    }

    // update user info 
    const updateUserInfo = (updatedInfo) => {
        setLoading(true) ;
        return updateProfile(auth.currentUser, updatedInfo )
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false) ;
            setUser(currentUser) ;
            setUserName(currentUser?.displayName) ;
            setUserPhoto(currentUser?.photoURL) ;
            console.log("Current User : ", currentUser);
        })
        return () => unSubscribe() ;
    }, [user])

    // login with google 
const googleLogin = () => {
    setLoading(true) ;
    return signInWithPopup(auth, googleProvider) ;

}

    const authInfo = {
        user,
        setUser,
        loading,
        signUp,
        loginUser,
        signOutUser,
        updateUserInfo,
        userName,
        userPhoto,
        setUserName,
        setUserPhoto,
        googleLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;