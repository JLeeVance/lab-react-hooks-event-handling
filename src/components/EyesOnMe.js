// Code EyesOnMe Component Here
function EyesOnMe () {
    function printGood (){
        console.log("Good!")
    }
    function printFocus () {
        console.log("Hey! Eyes on me!")
    }
    return (
        <button onFocus={printGood} onBlur={printFocus}>Eyes on me</button>
    )
}

export default EyesOnMe;