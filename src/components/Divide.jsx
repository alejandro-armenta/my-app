import { useState } from "react"

export default function Subtract() {

    const [firstNumber, setFirstNumber] = useState(0)
    const [secondNumber, setSecondNumber] = useState(0)

    function handleChangeFirstNumber(event) {
        //estos son strings
        setFirstNumber(+event.target.value)
    }
    
    function handleChangeSecondNumber(event) {
        setSecondNumber(+event.target.value)
    }

    const result = firstNumber / secondNumber

    return (
        <p>
            <input type="number" onChange={handleChangeFirstNumber} /> /{' '}
            <input type="number" onChange={handleChangeSecondNumber} /> = {result}
        </p>
    )
}