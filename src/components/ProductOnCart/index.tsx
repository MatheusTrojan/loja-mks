import styled from "styled-components";
import { useAppSelector } from "../../hooks/useAppDispatch";
import { fontColor } from "../UI/Variables"

const CartCard = styled.div`
    align-items: center;
    background-color: white;
    border-radius: 0.5em;
    display: flex;
    height: 95px;
    margin: 2em;
    width: 100%;

    .cartCard__image {
        padding: 0.5em;
        width: 80px;
    }

    .cartCard__title {
        color: ${fontColor};
    }

    .cartCard__input {
        max-height: 20px;
        max-width: 100px;
    }

    .cartCard__price {
        color: ${fontColor};
    }
`

export function ProductOnCart() {

    const products = useAppSelector((state) => state.products.products);
    const items = useAppSelector((state) => state.cart.items);

    return (
    <div>
        {Object.entries(items).map(([id, quantity]) => (
            <CartCard key={id}>
                <img className="cartCard__image" src={products[id].photo}/>
                <h2 className="cartCard__title">{products[id].name}</h2>
                <input className="cartCard__input" type="number" defaultValue={quantity}/>
                <p className="cartCard__price">R${(Math.floor(products[id].price))}</p>
            </CartCard>
        ))}
    </div>
)}

