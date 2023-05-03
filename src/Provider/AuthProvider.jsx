import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {


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

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, loggedUser=>{
            console.log("log user onAuthState", loggedUser)
            setUser(loggedUser)
        })
        return ()=>{
            unSubscribe()
        }
    },[])




    const userInfo = {
        user,
        createUser,
        logIn,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;