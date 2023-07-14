import { useState } from "react";

function Counting(props){

    let  [value, setvalue] = useState(0);

     let incrementCount = () => {
        setvalue(value++);
    }


    return(
    <>
  <h1>{props.count}</h1>
  <h1>{props.firstName}</h1>

    <button onClick={incrementCount}>increment</button>
    <h1>{value}</h1>
    </>
  );
}

export default Counting;