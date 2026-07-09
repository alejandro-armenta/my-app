import { useState } from "react";
import Calculation from "./components/Calculation";
import Result from "./components/Result";


function ProductsList({ products }) {
    return (
        <ul>
            {
                [
                    <p key={0}><strong>Hola</strong></p>,
                    <p key={1}><strong>como estas?</strong></p>,
                ]
            }

            {products.map(product => (
                <li key={product.id}>
                    <h2>{product.title}</h2>
                    <p>${product.price}</p>
                </li>
            )
            )}
        </ul>
    )
}


function TermsOfUse() {

    const [showTerms, setShowTerms] = useState(false)

    function handleShowTermsSummary() {
        setShowTerms(true)
    }

    return (
        <section>
            <button onClick={handleShowTermsSummary}>Show terms of use summary</button>
            {/*esto lo combierte en booleano*/}
            {!!showTerms && <p>By continuing, you accept that we will not indemnify you for any damage or harm caused by our products.</p>}
        </section>
    )
}



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