import React from 'react'

function Animated(props) {
  return <a href={props.target}>{props.text}</a>
}

function NavItem(props) {
  return <div>
    <Animated target={props.target} text="some text" />
  </div>
}

function App() {
  return (
    <>
      <Link href='https://vite.dev/' download={true}>hello</Link>
      <Link href="https://google.com">Can you google that for me?</Link>
    </>
  )
}

export default App
