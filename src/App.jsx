import React from 'react'

import { useState } from 'react'

function Counter() {

  const [counter, setCounter] = useState(0)

  function handleIncrement() {
    setCounter(counter + 1)
  }

  return (
    <>
      <p>Counter value: {counter}</p>
      <button onClick={handleIncrement}>Increment</button>
    </>
  )
}

function App() {
  return (
    <Counter />
  )
}

export default App
