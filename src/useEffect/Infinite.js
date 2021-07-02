// import { useEffect } from "react"
import React , {useState, useEffect} from 'react'

function Infinite() {

    const[count,setCount]=useState(0);

    useEffect(()=>{
        console.log("Use Effect");
        let num=Math.random()*100;
        setCount(num);
        // document.title=`Clicked ${count} times`
    })
    const handleCountChange=()=>{
        setCount(count+1);
    }

    return (
        <div>
            <p>Button clicked {count} times</p>
            <button onClick={handleCountChange}>Click Me</button>
        </div>
    )
}

export default Infinite
