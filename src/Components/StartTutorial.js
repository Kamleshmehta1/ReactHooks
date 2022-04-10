import React, { useState } from 'react'

function StartTutorial() {

    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("Type here...");
    const [bool, setBool] = useState(true)

    const handleClick = () => {
        setCount(count + 1)
        setBool(!bool)
    }

    const handleChange = (e) => {
        let newValue = e.target.value
        setInputValue(newValue)
    }

    return (
        <div>
            <h1 className='count-head'>{count}</h1>
            <br />
            <h2>{bool && inputValue}</h2>
            <input type="text" placeholder='Enter Something...' onChange={handleChange} />
            <br />
            <button onClick={handleClick}>IncremenT</button>
        </div>
    )
}

export default StartTutorial