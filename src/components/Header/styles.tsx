import styled from "styled-components";
import { primaryColor } from "../UI/Variables";

export const StyledHeader = styled.nav`
align-items: center;
background-color: ${primaryColor};
display: flex;
height: 10vh;
justify-content: space-between;
padding: 3.25em;
`

export const TitleWrapper = styled.div`
align-items: flex-end;
display: flex;
justify-content: center;
gap: 0.6em;
`

export const Title = styled.h1`
color: white;
font-size: 2.5em;
font-weight: 600;
line-height: 1.125em;
`

export const Subtitle = styled.h3`
color: white;
font-size: 1.25em;
font-weight: 300;
line-height: 1.125em;
margin-bottom: 0.25em;
` 

export const Icon = styled.img`
    height: 1.15em;
    width: 1.15em;
`;

export const CartBtn = styled.a`
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

export const FinishBtn = styled.button`
    background-color: black;
    color: white;
    cursor: pointer;
    font-size: 1.75em;
    font-weight: 700;
    height: 100px;
    position: relative;
    width: 100%;
`;

export const TotalPrice = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 2em;

    .totalText {
        font-size: 1.6em;
        font-weight: 700;
    }
`;

export const ModalTitle = styled.h2`
    font-size: 1.7em;
    font-weight: 700;
    line-height: 1.25em;
    margin: 1em 1em;
    width: 50%;
`; 