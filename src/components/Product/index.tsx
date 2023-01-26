import { useFetch } from "../../hooks/useFetch";

type Products = {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: number;
}

function Product() {

    const { data: allProducts, isFetching } = 
        useFetch<Products[]>("/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC")

    return (
        <ul>
            {isFetching && <p>Carregando...</p>}
            {allProducts?.map(prod => {
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
