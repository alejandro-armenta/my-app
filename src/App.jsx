import { useState } from "react"

export default function App() {

    const INITIAL_PRODUCTS = [
        { id: 'p1', title: 'React - The Complete Guide [Course]', price: 19.99 },
        { id: 'p2', title: 'Stylish Chair', price: 329.49 },
        { id: 'p3', title: 'Ergonomic Chair', price: 269.99 },
        { id: 'p4', title: 'History Video Game Collection', price: 99.99 },
    ];

    const [products, setProducts] = useState(INITIAL_PRODUCTS)

    function handleAddProduct() {
        setProducts((prevProducts) => ([
            ...prevProducts,
            {
                id: new Date().getTime(),
                title: 'ale',
                price: 500,
            },
        ]))
    }

    return (
        <section>
            <button onClick={handleAddProduct}>Add Product</button>
            <ul>
                {products.map(
                    product => (
                        <li key={product.id}>
                            {product.title} ${product.price}
                        </li>
                    )
                )}
            </ul>
        </section>
    )
}