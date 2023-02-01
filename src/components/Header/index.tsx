import { useState } from "react"

import { ShopCartModal } from "../ShopCartModal";

import { useAppSelector } from "../../hooks/useAppDispatch";
import { getMemoizedNumItems } from "../../store/slices/cartSlice"; 

import ShoppingCart from "../../assets/images/shopping_cart.svg"
import { StyledHeader, Subtitle, Title, TitleWrapper, CartBtn, Icon } from "./styles";
import 'animate.css';

export function Header() {

    const numItems = useAppSelector(getMemoizedNumItems);
    
    const [isModalVisible, setIsModalVisible] = useState(false)  
  
    if(isModalVisible){
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }

    return (
        <StyledHeader>
            <TitleWrapper>
                <Title>MKS</Title>
                <Subtitle>Sistemas</Subtitle>
            </TitleWrapper>

            <CartBtn onClick={() => setIsModalVisible(true)}>
                <Icon src={ShoppingCart} alt="Carrinho de Compras"/>
                <span>{ numItems }</span>
            </CartBtn>

            {isModalVisible ? (
                <ShopCartModal onClose={() => setIsModalVisible(false)} />
            ) : null}

        </StyledHeader>
    )
};
