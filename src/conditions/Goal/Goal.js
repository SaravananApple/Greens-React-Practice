import { useState } from "react";

function Goaled() {

    let [value, setvalue] = useState(0);
    const date  = new Date();
    const time  = date.getHours();
    const handleClick = () => {
        setvalue(value++);
    }

    if(time > 12)
    {
        return(
            <>
            <h1>State is working: {value}</h1>
            <button onClick={handleClick}>Add</button>
            </>
        )
    }
    else{
         return <h1>State is not working</h1>
    }


}




function Goal() {

let flowers = ['Rose', 'Jasmine', 'SunFlower'];

const list = flowers.map((items) => <h1>{items}</h1>)

return(
    <>
    <h1>{list}</h1>
    <h1>Goal is here</h1>
    <Goaled/>
    </>
)

}

export default Goal;