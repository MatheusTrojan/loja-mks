import styled from "styled-components"
import { useState } from "react"
import { ShopCartModal } from "../ShopCartModal";
import { primaryColor } from "../UI/Variables"
import { CartBtn, FinishBtn, Icon, ModalTitle, TotalPrice } from "../UI"

import { getMemoizedNumItems } from "../ShopCartModal/cartSlice"; 
import { useAppSelector } from "../../hooks/useAppDispatch";

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

export function Header() {

    const numItems = useAppSelector(getMemoizedNumItems);
    
    const [isModalVisible, setIsModalVisible] = useState(false)
    
    const products = useAppSelector((state) => state.products.products);
    const items = useAppSelector((state) => state.cart.items);

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

                        {Object.entries(items).map(([id, quantity]) => (
                            <div key={id}>
                                <img src={products[id].photo}/>
                                <h2>{products[id].name}</h2>
                                <input type="number" defaultValue={quantity}/>
                                <p>{products[id].price}</p>
                            </div>
                        ))}

                        <TotalPrice>
                            <p className="totalText">Total</p>
                            <p className="totalText">R$500</p>
                        </TotalPrice>

                        <FinishBtn onClick={() => setIsModalVisible(false)}>Finalizar Compra</FinishBtn>
                    </>
                </ShopCartModal> 
                ) : null}

        </StyledHeader>
    )
};
