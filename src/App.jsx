import React from 'react'

import { useState } from 'react'

function NewsletterSignup() {

  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(false)

  function handleUpdateEmail(event) {
    setEmail(event.target.value)
  }

  function handleUpdateAgreement(event) {
    setAgreed(event.target.checked)
  }

  function handleSignup(event) {
    event.preventDefault()
    const userData = { userEmail: email, userAgrees: agreed }
    console.log(userData)
  }

  return (
    <form onSubmit={handleSignup}>
      
      <div>
        
        <label htmlFor='email'>Email:</label>
        
        <input
          type='email'
          id='email'
          value={email}
          onChange={handleUpdateEmail} />
          
      </div>

      <div>

        <input
          type='checkbox'
          id='agree'
          checked={agreed}
          onChange={handleUpdateAgreement} />

        <label htmlFor='agree'>Agree to the terms and conditions</label>

      </div>

      <button type='submit'>Sign Up</button>

    </form>
  )
}

function App() {
  return (
    <NewsletterSignup />
  )
}

export default App
