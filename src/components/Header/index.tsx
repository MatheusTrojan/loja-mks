import { useState } from "react"

import { ShopCartModal } from "../ShopCartModal";
import { ProductOnCart } from "../ProductOnCart"

import { useAppSelector } from "../../hooks/useAppDispatch";
import { getMemoizedNumItems } from "../ShopCartModal/cartSlice"; 
import { getTotalPrice } from "../ShopCartModal/cartSlice";
import ShoppingCart from "../../assets/images/shopping_cart.svg"
import { StyledHeader, Subtitle, Title, TitleWrapper, CartBtn, FinishBtn, Icon, ModalTitle, TotalPrice } from "./styles";

export function Header() {

    const numItems = useAppSelector(getMemoizedNumItems);
    
    const [isModalVisible, setIsModalVisible] = useState(false)
    
    const totalPrice = useAppSelector(getTotalPrice)

    return (
        <StyledHeader>
            <TitleWrapper>
                <Title>MKS</Title>
                <Subtitle>Sistemas</Subtitle>
            </TitleWrapper>

            <CartBtn onClick={() => setIsModalVisible(true)}>
                <Icon src={ShoppingCart}/>
                <span>{ numItems }</span>
            </CartBtn>
            {isModalVisible ? (
                <ShopCartModal onClose={() => setIsModalVisible(false)}>
                    <>
                        <ModalTitle>Carrinho <br/>de compras</ModalTitle>

                        <ProductOnCart />

                        <TotalPrice>
                            <p className="totalText">Total</p>
                            <p className="totalText">R${totalPrice}</p>
                        </TotalPrice>

                        <FinishBtn onClick={() => setIsModalVisible(false)}>Finalizar Compra</FinishBtn>
                    </>
                </ShopCartModal> 
                ) : null}

        </StyledHeader>
    )
};
