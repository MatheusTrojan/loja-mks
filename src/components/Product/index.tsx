import { useEffect } from "react";
import { Card, CardsList, BuyBtn } from "./styles";
import { getProducts } from "../../api/api";
import { useAppSelector, useAppDispatch } from "../../hooks/useAppDispatch";
import { receivedProducts } from "../../store/slices/productsSlice";
import { addToCart } from "../../store/slices/cartSlice";

import ShoppingBag from "../../assets/images/shopping-bag.svg"

export default function Product() {

    const dispatch = useAppDispatch();
    useEffect(() => {
        getProducts().then((products) => {
            dispatch(receivedProducts(products));
        });
    }, []);

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
                        <BuyBtn onClick={() => dispatch(addToCart(prod.id))}>
                            <img src={ShoppingBag}/>
                            <p>COMPRAR</p>
                        </BuyBtn>
                    </Card>
                )
            })}
        </CardsList>
    )
}