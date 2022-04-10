import React, { useImperativeHandle, useState, forwardRef } from 'react'

const Button = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false)

    useImperativeHandle(ref, () => ({
        alterToggle() {
            setToggle(!toggle)
        }
    }))

    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>click me</button>
            <br />
            {toggle && "Hide & Seek"}
        </div>
    )
});

export default Button