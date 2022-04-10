import React, { useReducer } from 'react'

function UseReducer() {

    const reducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT":
                return {
                    count: state.count + 1,
                    showText: state.showText
                }
            case "TOGGLE_SHOWTEXT":
                return {
                    count: state.count,
                    showText: !state.showText
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })
    return (
        <div><div>
            <h1 className='count-head'>{state.count}</h1>
            <br />
            <h2>{state.showText && `This is a great text...`}</h2>
            {/* <input type="text" placeholder='Enter Something...' onChange={handleChange} /> */}
            <br />
            <button onClick={() => {
                dispatch({ type: "INCREMENT" });
                dispatch({ type: "TOGGLE_SHOWTEXT" });
            }}>
                IncremenT
            </button>
        </div></div >
    )
}

export default UseReducer