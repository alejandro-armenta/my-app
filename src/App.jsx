import { useEffect, useRef, useState } from "react"

function Alert() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleEmailChange(event) {
        setEmail(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)

    }

    function validateEmail() {
        if (!email.includes('@')) {
            console.log('invalid email')
        }
    }

    useEffect(
        () => (validateEmail()), [validateEmail]
    )

    return (
        <form method="GET">
            <div>
                <label>Email</label>
                <input type="email" onChange={handleEmailChange} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" onChange={handlePasswordChange} />
            </div>
            <button>Save</button>
        </form>
    )
}

export default function App() {

    const [showAlert, setShowAlert] = useState(false)

    function handleShowAlert() {
        setShowAlert((prev) => (!prev))
    }

    return (
        <>
            <button onClick={handleShowAlert}>{showAlert ? 'Hide' : 'Show'} Alert</button>
            {/*esta es una instancia*/}
            {showAlert && <Alert />}
        </>
    )
}