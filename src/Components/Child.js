import React, { useEffect } from 'react'

function Child({ returnComment }) {


    useEffect(() => {
        console.log("Entered in Child Component");
    }, [returnComment])

    return (
        <div>{returnComment("kamlesh")}</div>
    )
}

export default Child