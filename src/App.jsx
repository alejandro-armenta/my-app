import { useState } from "react"

function TermsOfUse() {

    const [showTerms, setShowTerms] = useState(false)

    function handleShowTermsSummary() {
        setShowTerms(true)
    }

    let ptext

    if (showTerms) {
        ptext = <p>By continuing, you accept that we will not indemnify you for any damage or harm caused by our products.</p>
    }

    return (
        <section>
            <button onClick={handleShowTermsSummary}>Show terms of use summary</button>
            {ptext}
        </section>
    )
}

export default function App() {
    return (
        <TermsOfUse />
    )
}