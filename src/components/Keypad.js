// Code Keypad Component Here

function Keypad (){
    function handleChange(){
        console.log('Entering password...')
    }

    return (
        <div>
            <p>Enter your password: </p>
            <input type="password" onChange={handleChange}></input>
        </div>
    )
}

export default Keypad;