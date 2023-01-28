import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/useAppDispatch";
import { receivedProducts } from "./productsSlice";
import { fontColor, tertiaryColor } from "../UI/Variables";
import styled from "styled-components";
import { BuyBtn } from "../BuyBtn";
import { getProducts } from "../../api/api";

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

export default function Product() {

    const dispatch = useAppDispatch();
    useEffect(() => {
        getProducts().then((products) => {
            dispatch(receivedProducts(products));
        })
    })


    const products = useAppSelector(state => state.products.products)

    return (
        <CardsList>
            {/* {isFetching && <p>Carregando...</p>} */}
            {Object.values(products).map(prod => {
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