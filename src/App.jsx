import { useState } from "react"

function ProductsList({ products }) {
    const elements = []

    for (const product of products) {
        elements.push(
            <li key={product.id}>
                <h2>{product.title}</h2>
                <p>${product.price}</p>
            </li>
        )
    }
    
    console.log(elements)

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default function App() {
    const products = [
        { id: 'p1', title: 'A Book', price: 59.99 },
        { id: 'p2', title: 'A Carpet', price: 129.49 },
        { id: 'p3', title: 'Another Book', price: 39.99 },
    ];

    return (
        <ProductsList products={products} />
    )
}