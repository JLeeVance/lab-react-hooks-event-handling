// Code Keypad Component Here

function Keypad (){
    function printText() {
        console.log("Entering password...")
    }


    return (
        <div>
            <input type="password" onChange={printText} />
        </div>
    )
}

export default Keypad;