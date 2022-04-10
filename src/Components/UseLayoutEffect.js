import React, { useLayoutEffect, useEffect, useRef } from 'react'

function UseLayoutEffect() {

    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, [])

    useEffect(() => {
        inputRef.current.value = "Hello"
    }, [])

    return (
        <div>
            <input type="text" ref={inputRef} value="pedro" style={{ height: 100, width: 400,fontSize:"1.5rem" }} />
        </div>
    )
}

export default UseLayoutEffect