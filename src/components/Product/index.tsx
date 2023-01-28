import { useFetch } from "../../hooks/useFetch";
import { fontColor, tertiaryColor } from "../UI/Variables"
import styled from "styled-components"
import { BuyBtn } from "../BuyBtn";

export type Products = {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: number;
}

const CardsList = styled.ul`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    list-style: none;
    height: 18.2em;
    margin: 100px 400px;
`

const Card = styled.li`

    box-sizing: border-box;
    background-color: white;
    border-radius: 0.5em;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 100%;
    position: relative;
    width: 14em;

    .photo {
        height: 8rem;
        margin: 0.7em 3em;
        width: 8rem;
    }

    .title-price {
        align-items: center;
        display: flex;
        gap: 0.75em;
        padding: 0 0.5em;
    }

    .title {
        color: ${fontColor};
        font-size: 16px;
        font-weight: 400;
        width: 70%;
    }

    .price {
        background: ${tertiaryColor};
        border-radius: 0.5em;
        color: white;
        font-size: 15px;
        font-weight: 700;
        padding: 0.3em 0.5em;
        max-height: 1.8em;
    }

    .description {
        color: ${fontColor};
        font-size: 10px;
        text-align: left;
        padding: 1em;
        width: 100%;
    }
`

function Product() {

    const { data: allProducts, isFetching } = 
        useFetch<Products[]>("/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC")

    return (
        <CardsList>
            {isFetching && <p>Carregando...</p>}
            {allProducts?.map(prod => {
                return (
                    <Card key={prod.id}>
                        <img className="photo" src={prod.photo} alt={prod.name} />
                        <div className="title-price">
                            <h2 className="title">{prod.name}</h2>
                            <h4 className="price">R${(Math.floor(prod.price))}</h4>
                        </div>
                        <p className="description">{prod.description}</p>
                        <BuyBtn/>
                    </Card>
                )
            })}
        </CardsList>
    )
}

export default Product
