import { useState } from 'react';





function Forms() {

    const [inputValue, setInputValue] = useState({ });
    let companies = ['HCL', 'Apple', 'Actalent'];


    function handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        setInputValue((prevState) => ({ ...prevState, [name]: value }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(inputValue);
    }

    return (
     <>
        <form onSubmit={handleSubmit}>
            <ol>
                {
                    companies.map((value, index, arr) => { return <li key={index}> {index + 1} {value} {arr}</li> })
                }
            </ol>
            <label htmlFor="user"> Enter User Name: </label>
            <input id="user" type='text' onChange={handleChange} name='user' value={inputValue.user} />
            <label>Enter email: <input onChange={handleChange} type='email' name='mail' value={inputValue.mail} /></label>
            <button type='submit'> Submit </button>


        </form>
 <h1>{inputValue.user}</h1>
 <h1>{inputValue.mail}</h1>

        </>
    );
}


export default Forms;