import React , {useRef, useState, useEffect} from 'react'

function RefComponent()
{

  let value = useRef(0);
  let [stateValue, setStateValue] = useState(0);
  let [stateText, setStateText] = useState("john");
  let inputRef = useRef();
  useEffect(
    () => {
        console.log("RefComponent is updated")
    },[stateText]
  );
//  function handleClick()
//  {
//   inputRef.current.focus();  
//  } 

 


function handleRef()
 {
  value.current++; 
 console.log(value.current);

 }

 function handleState()
 {
    setStateValue(stateValue++);
 }

 function handleChange()
 {
    console.log(inputRef.current.value);
 }


    return( 
        <>
        <button onClick={() => {setStateText("Actalent")}}>Update New State</button>
        <h1>New State: {stateText}</h1>
        <input ref={inputRef}  onChange={handleChange} type='text'/>
        <h1>State Value: {stateValue}</h1>
        <h1>Ref value: {value.current}</h1>
        <button onClick={handleState}>Add State</button>
        <button onClick={handleRef}>Add Ref</button>
        </>
    );

}


export default RefComponent;