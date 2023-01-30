import styled from "styled-components";
import { fontColor } from "../UI/Variables"
import { IoIosCloseCircle } from "react-icons/Io"
import { useAppSelector, useAppDispatch } from "../../hooks/useAppDispatch";

import { removeFromCart } from "../ShopCartModal/cartSlice";

const CartCardList = styled.ul`
    display: flex;
    flex-direction: column;
    height: 70vh;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background-color: #4e494990;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #ffffffc3;
        border: 1px solid grey;
        border-radius: 8px;
    }
`

const CartCard = styled.li`
    align-items: center;
    background-color: white;
    border-radius: 0.5em;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: 6em;
    margin: 1.25em 1.75em;
    width: 375px;
    position: relative;

    .cartCard__image {
        padding: 0.5em;
        width: 6em;
    }

    .cartCard__title {
        color: ${fontColor};
        font-size: 13px;
        font-weight: 400;
        justify-self: left;
    }

    .cartCard__input {
        justify-self: center;
        max-height: 20px;
        max-width: 60px;
    }

    .cartCard__price {
        color: ${fontColor};
        font-size: 14px;
        font-weight: 700;
    }

    .cartCard__delete {
        color: black;
        position: absolute;
        right: -5px;
        top: -5px;
        cursor: pointer; 
    }
`

export function ProductOnCart() {

    const products = useAppSelector((state) => state.products.products);
    const items = useAppSelector((state) => state.cart.items);
    const dispatch = useAppDispatch()

    return (
    <CartCardList>
        {Object.entries(items).map(([id, quantity]) => (
            <CartCard key={id}>
                <img className="cartCard__image" src={products[id].photo}/>
                <h2 className="cartCard__title">{products[id].name}</h2>
                <input className="cartCard__input" type="number" defaultValue={quantity}/>
                <p className="cartCard__price">R${(Math.floor(products[id].price))}</p>
                <IoIosCloseCircle 
                    size={25}
                    className="cartCard__delete"
                    onClick={() => dispatch(removeFromCart(id))} 
                />
            </CartCard>
        ))}
    </CartCardList>
)}

