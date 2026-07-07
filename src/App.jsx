import React from 'react'

import { useState } from 'react'

//esta se llama cuando se modifica
function EmailInput() {

  const [errorMessage, setErrorMessage] = useState('')

  //esta no se llama cuando se modifica
  function evaluateEmail(event) {

    const enteredEmail = event.target.value

    if (enteredEmail.trim() === '' || !enteredEmail.includes('@')) {
      setErrorMessage('The entered email address is invalid.')
    }
    else {
      setErrorMessage('')
    }

  }

  return (
    <div>

      <input
        placeholder='your email'
        type='email'
        onBlur={evaluateEmail}
      />

      <p>{errorMessage}</p>

    </div>
  )
}

function App() {
  return (
    <EmailInput />
  )
}

export default App
