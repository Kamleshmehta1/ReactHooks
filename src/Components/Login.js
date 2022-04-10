import React, { useContext } from 'react'
import { appcontext } from "./UseContext"

function Login() {

    const { setUserName } = useContext(appcontext);

    return (
        <div>
            <input type="text" onChange={(event) => {
                setUserName(event.target.value);
            }}
            />
        </div>
    )
}

export default Login