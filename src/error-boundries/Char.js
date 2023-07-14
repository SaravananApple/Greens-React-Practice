import React from 'react';


function Char({name}){

if(name=="Jhon"){
    throw new Error("Error occured in selecting character name");
}

    return(
    <>
    <h1>Youe selected character: {name}</h1>
    </>
    );
}


export default Char;