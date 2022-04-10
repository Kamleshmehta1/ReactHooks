import React, { useContext, useState, createContext } from 'react'
import Login from './Login';
import User from './User';

export const appcontext = createContext(null)

function UseContext() {

    const [userName, setUserName] = useState("");

    return (
        <appcontext.Provider value={{ userName, setUserName }}>
            <Login />
            <User />
        </appcontext.Provider>
    )
}

export default UseContext