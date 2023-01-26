import { useEffect, useState } from "react"
import axios from "axios"

type Picles = {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: number;
}

function Product() {

    const [products, setProducts] = useState<Picles[]>([])

    useEffect(() => {
        axios.get("https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC")
            .then(response => {
                setProducts(response.data.products)
            })
    }, [])

    return (
        <ul>
            {products.map(prod => {
                return (
                    <li key={prod.id}>
                        <h2>{prod.name}</h2>
                        <p>{prod.description}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default Product
