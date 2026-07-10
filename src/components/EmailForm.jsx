
import { useRef, useState } from 'react'
import classes from './EmailForm.module.css'

export default function EmailForm() {
    //refs are only good for reading no writing


    const emailRef = useRef(0)

    function handleSubmitForm(event) {
        event.preventDefault()

        const enteredEmail = emailRef.current.value

        const data = { email: enteredEmail }

        console.log(data)
    }

    return (
        <form
            className={classes.form}
            onSubmit={handleSubmitForm}>

            <label htmlFor='email'>Your email</label>

            <input
                ref={emailRef}
                type='email'
                id='email' 
                />

            <button>Save</button>

        </form>
    )
}