import React from "react";
import react, { useState } from "react";

export function Button ()
{
    const [color,setclore]= useState('blue')

 
    const [count,setcount] = useState(1)

    const [ Changetext ,setChange] = useState('Divya')
    


function Changecolore(){

    setclore('red');
    // document.getElementById('blue').innerText='red'
}

    function Increment(){

        setcount(count+1);
        // document.getElementById('count').innerText='1'
}

function Changename (){
    setChange ('Artu');
    // document.getElementById('divya').innerText='diuu'

    
}

return(

        <div>
            <h1>{color}</h1>
            <button onClick={Changecolore}>Change</button>

            <h2>{count}</h2>
            <button onClick={Increment}>Increment</button> 

            <h1>{Changetext}</h1>
            <button onClick={Changename}>Changetext</button>

        

        </div>
);
};




 