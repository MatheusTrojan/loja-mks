import styled from "styled-components"
import { primaryColor } from "../UI/Variables"

import ShoppingBag from "../../assets/images/shopping-bag.svg"

const BuyingBtn = styled.button` 
    align-items: center;
    background: ${primaryColor};
    border: none;
    border-radius: 0 0 8px 8px;
    cursor: pointer;
    display: flex;
    gap: 0.25em;
    justify-content: center;
    padding: 0.5em;
    position: absolute;
    top: calc(100% - 30px);
    max-height: 30px;
    transition: 0.3s ease-in-out;
    width: 100%;

    :hover {
      background-color: #1767df;
    }

    img {
        height: 15px;
        margin: 0;
        width: 15px;
    }

    p {
        color: white;
        font-size: 14px;
        font-weight: 600;
        width: 50%;
    }
`
export function BuyBtn() {
  return (
    <BuyingBtn>
        <img src={ShoppingBag}/>
        <p>COMPRAR</p>
    </BuyingBtn>
  )
}
