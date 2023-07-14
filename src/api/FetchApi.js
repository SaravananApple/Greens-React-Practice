import React, { useEffect, useState } from 'react';

function FetchApi()
{

const [input, setInput] = useState([]);


useEffect
(
() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((resp) => resp.json())
    .then( (data) => {
        console.log(JSON.stringify(data))
        setInput(JSON.stringify(data, null, 5))            
    })
},[]
)



 

    return (
        <>
        
       <pre>{input}</pre>
        </>
    );
}


export default FetchApi;