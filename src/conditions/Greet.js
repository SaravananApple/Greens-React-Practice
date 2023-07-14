
function Morning() {
    return (
        <>
            <h1>Good Morning...!</h1>
        </>
    );
}


function Evening() {
    return (
        <>
            <h1>Good AfterNoon...!</h1>
        </>
    );
}


function Greet() {

    const date = new Date();
    const time = date.getHours();
    

    console.log(time);
return(
    <>
    {
        time < 12  ?  <Morning /> : <Evening/>
    }
    {
        time < 12 && <h1>Time is working</h1>
    }
    </>
)

}

export default Greet;