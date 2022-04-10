import React, { useCallback, useState } from 'react'
import axios from 'axios'
import Child from './Child'

function UseCallBack() {

    const [toggle, setToggle] = useState(false)
    const [data, setData] = useState("Hello How are You!")

    const returnComment = useCallback((name) => {
        return data + name
    },[data])

    return (
        <div>
            <Child returnComment={returnComment} />
            <button onClick={() => {
                setToggle(!toggle)
            }}>click to toggle</button>
            {toggle && "Toggle me"}
        </div>
    )
}

export default UseCallBack