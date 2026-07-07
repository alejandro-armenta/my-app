import image from '../assets/hero.png'

import React from 'react'


function LoginForm() {

  const [userData, setUserData] = useState(
    {
      email: '',
      password: ''
    }
  )

  //el tio no sabe que tienes esa se la tienes que mandar
  function handleUpdateEmail(event) {
    setUserData(
      {
        email: event.target.value,
        password: userData.password
      }
    )
  }

  function handleUpdatePassword(event) {
    setUserData(
      {
        email: userData.email,
        password: event.target.value,
      }
    )
  }

  return (
    <div>
      <form>
        <input
          type='email'
          placeholder='your email'
          onBlur={handleUpdateEmail}
        />
        <input
          type='password'
          placeholder='your password'
          onBlur={handleUpdatePassword}
        />
      </form>

      <p>{userData.email}</p>

      <p>{userData.password}</p>

    </div>
  )
}

//multiple state slices
function LoginForm() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleUpdateEmail(event) {
    setEmail(event.target.value)
  }

  function handleUpdatePassword(event) {
    setPassword(event.target.value)
  }

  return (
    <div>
      <form>
        <input
          type='email'
          placeholder='your email'
          onBlur={handleUpdateEmail}
        />
        <input
          type='password'
          placeholder='your password'
          onBlur={handleUpdatePassword}
        />
      </form>
      <p>{email}</p>
      <p>{password}</p>
    </div>
  )
}

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

      <OtherCompnent ale={setErrorMessage} other={errorMessage} />

      <p>{errorMessage}</p>

    </div>
  )
}

function Animated(props) {
  return <a href={props.target}>{props.text}</a>
}

function NavItem(props) {
  return <div>
    <Animated target={props.target} text="some text" />
  </div>
}

//todos eston son de props por eso se pueden destructurar
function Link({ children, ...config }) {
  return (
    <p>
      <a
        {...config}
        target='_blank'
        rel='noopener noreferrer'>
        {children}
      </a>
    </p>
  )

}

function Product({ title, price, id }) {
  return <p> {title} {price} {id} </p>
}

export function Greeting() {
    //react creates this virtual dom
    return React.createElement('p', {}, 'alejandro')
}

export function Advertisement() {
    return <a href='https://vite.dev/'>visit my website</a>
}

export function Advertisement_2() {
    return React.createElement(
        'a', { href: 'https://vite.dev/' }, 'visit my website'
    )
}

export function Nested() {
    //react
    return React.createElement(
        'p', {}, [
        'Please visit my ',
        React.createElement(
            'a', { href: 'https://vite.dev/' }, 'BLOG'
        )
    ]
    )
}

export function calculate(a, b) {
    return ([
        a + b,
        a - b,
    ]
    )
}

export function extra() {
    //is jsx that gets transformed to functions anidadas
    //p es una funcion no puedes regresar dos valores
    const [a, b] = calculate(1, 2)

    const userName = 'Max'

    const ale = (
        <>

            <p>Sum: {a}</p>

            <p>Difference: {b}</p>

            <p>
                <img src={image} />
            </p>

            <p>
                <input type='text' value={userName} />
            </p>

        </>
    )

    return <div>{ale}</div>
}


function GoalItem(props) {
  return <li>{props.children} (ID: {props.id})</li>
}