import React , {useState, useEffect} from 'react'

function Ue2() {

    const[count,setCount]=useState(1);

    useEffect(()=>{
        console.log("Use Effect");
        document.title=`Clicked ${count} times`;
    },[])

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

export default Ue2
