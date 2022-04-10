import React, { useEffect, useState } from 'react'
import axios from "axios";

function UseEffFunction() {

    const [data, setData] = useState("");
    const [count, setCount] = useState(null);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data[0].email);
                console.log("API WAS CALLED");
            });
    },[count]);


    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>{data}</h1>
            <h1>{count}</h1>
            <button onClick={handleClick}>onClick</button>
        </div>
    )
}

export default UseEffFunction