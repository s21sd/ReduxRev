import React from 'react'
import { useSelector } from 'react-redux'

const Displaycount = () => {
    let { counterval } = useSelector((store) => store.counterval);
    return (
        <div>Count is : {counterval}</div>
    )
}

export default Displaycount