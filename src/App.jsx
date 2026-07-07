import React from 'react'

function GoalItem(props) {
  return <li>{props.children} (ID: {props.id})</li>
}

function App() {
  return (
    <ul>
      <GoalItem id='g1'>Learn React</GoalItem>
      <GoalItem id='g2'>Alejandro</GoalItem>
    </ul>
  )
}

export default App
