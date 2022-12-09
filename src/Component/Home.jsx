import React from 'react'
import store from '../Redux/Store'

const Home = () => {

    function renderstore() {
        const state = store.getState()
        const element = document.getElementById("value")
        element.innerHTML = state.value.toString()
    }
    window.onload = function () {
        renderstore();
    }
    store.subscribe(renderstore);
    const increment = () => {
        store.dispatch({ type: 'counter/incremented' })
    }

    const Decrement = () => {
        store.dispatch({ type: 'counter/decremented' })
    }

    return (

        <>
            <p id='value'></p>
            <button type="button" onClick={increment}>Increment</button>
            <button type="button" onClick={Decrement}>Decrement</button>
        </>
    )
}

export default Home