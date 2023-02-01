import { CartCard, CartCardList } from "./styles";
import { useAppSelector, useAppDispatch } from "../../hooks/useAppDispatch";
import { removeFromCart, updateQuantity, addItemQuantity, subItemQuantity } from "../../store/slices/cartSlice";
import 'animate.css';

import CloseCart from "../../assets/images/close_cart.svg"

export function ProductOnCart() {

    const products = useAppSelector((state) => state.products.products);
    const items = useAppSelector((state) => state.cart.items);
    const dispatch = useAppDispatch()

    return (
    <CartCardList>
        {Object.entries(items).map(([id, quantity]) => (
            <CartCard key={id}>
                <img className="cartCard__image" src={products[id].photo} alt={products[id].name}/>
                <h2 className="cartCard__title">{products[id].name}</h2>
                <div className="cartCard__quantity">
                    <p>Qtd:</p>
                    <div className="cartCard__button--container">
                        <button className="cartCard__button" onClick={() => dispatch(subItemQuantity(Number(id)))}>-</button>
                        <span className="cartCard__quantity--value">{quantity}</span>
                        <button className="cartCard__button" onClick={() => dispatch(addItemQuantity(Number(id)))}>+</button>
                    </div>
                </div>
                <p className="cartCard__price">
                    R${(Math.floor(products[id].price))}
                </p>
                <img
                    src={CloseCart}
                    className="cartCard__delete"
                    onClick={() => dispatch(removeFromCart(id))} 
                />
            </CartCard>
        ))}
    </CartCardList>
)}

