import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const auth = getAuth(app)


    const [loading, setLoading] = useState(true)

    const [user, setUser] = useState()

    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email, password )
    }

    const logIn =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email , password)
    }

    const updateUser=(name, url)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, {displayName:name, photoURL:url})
    }

    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, loggedUser=>{
            console.log("log user onAuthState", loggedUser)
            setUser(loggedUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])




    const userInfo = {
        user,
        loading,
        createUser,
        logIn,
        updateUser,
        logOut
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;