import { useState } from "react";
import Calculation from "./components/Calculation";
import Result from "./components/Result";

export default function App() {


    const [firstN, setFirstN] = useState(0)
    const [secondN, setSecondN] = useState(0)

    const [operation, setOperation] = useState('add')

    function firstNChanged(event) {
        setFirstN(+event.target.value)
    }

    function secondNChanged(event) {
        setSecondN(+event.target.value)
    }

    function opChanged(event) {
        setOperation(event.target.value)
    }

    let result;

    switch (operation) {
        case 'add':
            result = firstN + secondN
            break;
        case 'subtract':
            result = firstN - secondN
            break;
        case 'multiply':
            result = firstN * secondN
            break;
        case 'divide':
            result = firstN / secondN
            break;
        default:
            throw new Error(`invalid operation ${operation}`)
    }

    return (
        <>
            <Calculation onFirstNumberChanged={firstNChanged} onOperationChanged={opChanged} onSecondNumberChanged={secondNChanged} />
            <Result result={result} />
        </>
    )
}