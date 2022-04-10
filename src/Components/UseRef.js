import React, { useRef } from 'react'

function UseRef() {

    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus()
    }

    return (
        <div>
            <h1>TitlE</h1>
            <input type="text" placeholder='useRef...' ref={inputRef} />
            <br />
            <button onClick={handleClick}>Change Name</button>
        </div>
    )
}

export default UseRef