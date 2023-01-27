import styled from "styled-components"
import { useState } from "react"
import { ShopCartModal } from "../ShopCartModal";
import { primaryColor } from "../UI/Variables"
import { FinishBtn, Icon, ModalTitle, TotalPrice } from "../UI"

import ShoppingCart from "../../assets/images/shopping_cart.svg"

const StyledHeader = styled.nav`
    align-items: center;
    background-color: ${primaryColor};
    display: flex;
    height: 10vh;
    justify-content: space-between;
    padding: 3.25em;
`

const TitleWrapper = styled.div`
    align-items: flex-end;
    display: flex;
    justify-content: center;
    gap: 0.6em;
`

const Title = styled.h1`
    color: white;
    font-size: 2.5em;
    font-weight: 600;
    line-height: 1.125em;
`

const Subtitle = styled.h3`
    color: white;
    font-size: 1.25em;
    font-weight: 300;
    line-height: 1.125em;
    margin-bottom: 0.25em;
`

const CartBtn = styled.a`
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 0.5em;
    color: #000000;
    cursor: pointer;
    display: flex;
    font-weight: 700;
    gap: 0.75em;
    justify-content: center;
    padding: 0.5em 1em;
`

export function Header() {
    
     const [isModalVisible, setIsModalVisible] = useState(false)

    return (
        <StyledHeader>
            <TitleWrapper>
                <Title>MKS</Title>
                <Subtitle>Sistemas</Subtitle>
            </TitleWrapper>

            <CartBtn onClick={() => setIsModalVisible(true)}>
                <Icon src={ShoppingCart}/>
                0
            </CartBtn>
            {isModalVisible ? (
                <ShopCartModal onClose={() => setIsModalVisible(false)}>
                    <ModalTitle>Carrinho <br/>de compras</ModalTitle>
                    <div>CARDS DOS ITENS</div>
                    <TotalPrice>
                        <p className="totalText">Total</p>
                        <p className="totalText">R$500</p>
                    </TotalPrice>
                    <FinishBtn onClick={() => setIsModalVisible(false)}>Finalizar Compra</FinishBtn>
                </ShopCartModal> 
                ) : null}

        </StyledHeader>
    )
};
