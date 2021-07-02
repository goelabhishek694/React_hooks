// import { useEffect } from "react"
import React , {useState, useEffect} from 'react'
import './Ue3.css'

function Ue3() {
    console.log("render");
    const[count,setCount]=useState(0);
    const[darkMode,setDarkMode]=useState(false);

    const handleCountChange=()=>{
        setCount(count+1);
    }

    const handleDarkModeChange=()=>{
        setDarkMode(!darkMode);
    }

    useEffect(()=>{
        console.log("use Effect");
        document.title=`Clicked ${count} times`
    },[count])

    return (
        <div className={darkMode?'view-dark-mode':'view'}>
            <label htmlFor="dark Mode">DarkMode</label>
            <input type='checkbox' checked={darkMode} onChange={handleDarkModeChange}></input>
            <button onClick={handleCountChange}>{count}</button>
        </div>
    )
}

export default Ue3
