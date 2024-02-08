import React from 'react'
import { useSelector } from 'react-redux'

const Displaycount = () => {
    let counter = useSelector((store) => store.counter);
    return (
        <div>Count is : {counter}</div>
    )
}

export default Displaycount