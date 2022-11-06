import React from 'react'
import useCounter from './useCounter';


export default function Counter() {
    const { count, dispatch, ACTIONS } = useCounter();

    return (
        <div>
            <div className='counter'>
                <input type="text" placeholder='set counter value'
                    onChange={(e) => dispatch({
                        type: ACTIONS.SET_VALUE,
                        payload: e.target.value
                    })} />
                <h2>Count : {count}</h2>
                <button onClick={() => {
                    dispatch({ type: ACTIONS.INCREASE })
                }}>INCREMENT</button>
                <button onClick={() => {
                    dispatch({ type: ACTIONS.DECREASE })
                }}>DECREMENT</button>
                <button onClick={() => {
                    dispatch({ type: ACTIONS.RESET })
                }}>RESET</button>
            </div>
        </div>
    )
}