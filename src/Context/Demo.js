import React ,{useContext}from 'react';
import myContext from './Context';
import DemoChild from './DemoChild';
function Demo(){
    console.log("Demo Render");
    const context = useContext(myContext);
    console.log(context);
    return(
        <div>
            <DemoChild/>
        </div>
    )

}
export default Demo