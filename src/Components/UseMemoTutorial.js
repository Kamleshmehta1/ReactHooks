import axios from 'axios'
import React, { useEffect, useState, useMemo } from 'react'

function UseMemoTutorial() {

    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data);
            })
    }, [])



    const FindLongestName = (comments) => {
        if (!comments) {
            return null
        }
        let longestName = ""
        for (let i = 0; i < comments.length; i++) {
            let currentName = comments[i].name

            if (currentName.length > longestName.length) {
                longestName = currentName;
            }
        }
        console.log("THIS WAS COMPUTED");

        return longestName
    }

    const getLongestName = useMemo(() => FindLongestName(data), [data])

    return (
        <div>
            <div>{getLongestName}</div>
            <button onClick={() => {
                setToggle(!toggle)
            }}>click to toggle</button>
            {toggle && <h2>toggle</h2>}
        </div>
    )
}

export default UseMemoTutorial