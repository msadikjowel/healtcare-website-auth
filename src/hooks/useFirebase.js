import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {

    // states
    const [user, setUser] = useState({});
    const [error, setError] = useState('')

    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();

    // google sign in
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));
    }


    // logout
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
    }


    // state change
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });

    }, [])


    // login user details
    const [loginUser, setLoginUser] = useState({});

    return {
        user,
        error,
        isLoading,
        logOut,
        signInUsingGoogle,
        createUserWithEmailAndPassword,
        getAuth,
        signInWithEmailAndPassword,
        sendEmailVerification,
        updateProfile,
        setLoginUser,
        loginUser
    }
}

export default useFirebase;