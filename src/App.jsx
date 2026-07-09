import { useState } from "react"

function ColoredText() {

    const [chosenPriority, setChosenPriority] = useState('low-prio')

    function handleChoosePriority(event) {
        setChosenPriority(event.target.value)
    }

    return (
        <>
            <p className={chosenPriority}>Chosen priority: {chosenPriority}</p>
            <select onChange={handleChoosePriority}>
                <option value="low-prio">Low</option>
                <option value="high-prio">High</option>
            </select>
        </>
    )
}

export default function App() {
    return (
        <>
            <ColoredText />
        </>
    )
}