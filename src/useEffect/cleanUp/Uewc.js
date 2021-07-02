import React,{useState,useEffect} from 'react'

function Uewc() {
    console.log("render");
    const[count,setCount]=useState(0);

    const handleCountChange=()=>{
        setCount(count+1);
    }

    useEffect(() => {
        console.log("use effect");
        document.title=`Clicked ${count} times`;

        //cleanUp
        return ()=>{
            alert(`I will be called before the next useEffect is called ${count}`)
        }
    });

    // useEffect(() => {
    //     console.log("use effect");
    //     document.title=`Clicked ${count} times`;

    //     //cleanUp
    //     return ()=>{
    //         alert(`I will be called before the next useEffect is called ${count}`)
    //     }
    // },[]);

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleCountChange}>Click Me</button>
        </div>
    )
}

export default Uewc
