import React, { useContext } from 'react'
import { appcontext } from "./UseContext"

function User() {

    const { userName } = useContext(appcontext);

    return (
        <div>
            <h1>User:{userName}</h1>
        </div>
    )
}

export default User