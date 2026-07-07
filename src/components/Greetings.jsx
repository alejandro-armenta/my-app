import image from '../assets/hero.png'

import React from 'react'

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