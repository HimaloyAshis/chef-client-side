import React, { createContext, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()

    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth,email, password )
    }

    const logIn =(email, password)=>{
        return signInWithEmailAndPassword(auth, email , password)
    }




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