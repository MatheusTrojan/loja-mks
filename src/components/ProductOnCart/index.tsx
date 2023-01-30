import { CartCard, CartCardList } from "./styles";
import { useAppSelector, useAppDispatch } from "../../hooks/useAppDispatch";
import { removeFromCart, updateQuantity } from "../ShopCartModal/cartSlice";

import { IoIosCloseCircle } from "react-icons/Io"

export function ProductOnCart() {

    const products = useAppSelector((state) => state.products.products);
    const items = useAppSelector((state) => state.cart.items);
    const dispatch = useAppDispatch()

    function onQuantityChange(
        e: React.FocusEvent<HTMLInputElement>, 
        id: string
    ) {
        const quantity = Number(e.target.value) || 0;
        dispatch(updateQuantity({ id, quantity }));
    }

    function onQuantityChange_2(
        e: React.ChangeEvent<HTMLInputElement>, 
        id: string
    ) {
        const quantity = Number(e.target.value) || 0;
        dispatch(updateQuantity({ id, quantity }));
    }

    return (
    <CartCardList>
        {Object.entries(items).map(([id, quantity]) => (
            <CartCard key={id}>
                <img className="cartCard__image" src={products[id].photo}/>
                <h2 className="cartCard__title">{products[id].name}</h2>
                <input 
                    className="cartCard__input" 
                    type="number" 
                    defaultValue={quantity}
                    onBlur={(e) => onQuantityChange(e, id)}
                    onChange={(e) => onQuantityChange_2(e, id)}
                />
                <p className="cartCard__price">
                    R${(Math.floor(products[id].price))}
                </p>
                <IoIosCloseCircle 
                    size={25}
                    className="cartCard__delete"
                    onClick={() => dispatch(removeFromCart(id))} 
                />
            </CartCard>
        ))}
    </CartCardList>
)}

