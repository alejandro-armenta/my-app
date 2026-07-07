import React from 'react'

function Product({ title, price, id }) {
  return <p> {title} {price} {id} </p>
}

function App() {

  const productData = { title: 'a book', price: 29.99, id: 'p1' }

  //spread operator
  return <Product {...productData} />

}

export default App
