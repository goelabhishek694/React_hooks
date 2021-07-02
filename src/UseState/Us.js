import React ,{useState}from 'react'

function Us() {

    const [msgObj,setMessage]=useState({message:""});

    const handleChange=(e)=>{
        let val=e.target.value;

        // this wont work because memory refference is same so react wont notice the change
        // msgObj.message=val;
        // console.log(msgObj);
        // setMessage(msgObj);

        // this will work because new obj is created , so new reference hence state change is detected
        let nObj={...msgObj,message:val};
        setMessage(nObj);

    }

    return (
        <div>
            <input type='text' value={msgObj.message} onChange={handleChange}></input>
            <p>{msgObj.message}</p>
        </div>
    )
}

export default Us
