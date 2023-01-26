import styled from "styled-components"
import { primaryColor } from "../UI/Variables"

import { Icon } from "../UI"
import ShoppingCart from "../../assets/images/shopping_cart.svg"

const StyledHeader = styled.nav`
    align-items: center;
    background-color: ${primaryColor};
    display: flex;
    height: 10vh;
    justify-content: space-between;
    padding: 5vw;
`

const TitleWrapper = styled.div`
    align-items: flex-end;
    display: flex;
    justify-content: center;
    gap: 0.75em;
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
    display: flex;
    gap: 0.75em;
    font-weight: 700;
    justify-content: center;
    padding: 0.5em 1em;
`

export function Header() {
    return (
        <StyledHeader>
            <TitleWrapper>
                <Title>MKS</Title>
                <Subtitle>Sistemas</Subtitle>
            </TitleWrapper>

            <CartBtn>
                <Icon src={ShoppingCart}/>
                0
            </CartBtn>
        </StyledHeader>
    )
};
