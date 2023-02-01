import { fontColor, primaryColor, tertiaryColor } from "../UI/Variables";
import styled from "styled-components";

export const CardsList = styled.ul`
    align-items: center;
    column-gap: 22px;
    display: grid;
    flex: 1;
    flex-wrap: wrap;
    grid-template-columns: repeat(4, 14em);
    grid-template-rows: repeat(2, 18.2em);
    height: 100vh;
    justify-content: center;
    list-style: none;
    margin: 100px 400px 50px 400px;
    row-gap: 30px;

    @media (max-width: 1200px) {
        gap: 16px;
        grid-template-columns: repeat(4, 12.5em);
        grid-template-rows: repeat(2, 17em);
        height: 80vh;
        margin: 80px 300px 50px 300px;
    }

    @media (max-width: 840px) {
        gap: 16px;
        grid-template-columns: repeat(3, 12em);
        grid-template-rows: repeat(3, 16.5em);
        height: 100vh;
        margin: 50px 125px 150px 125px;
    }

    @media (max-width: 620px) {
        gap: 16px;
        grid-template-columns: repeat(2, 14em);
        grid-template-rows: repeat(5, 18em);
        margin: 50px 125px 500px 125px;
    }

    @media (max-width: 480px) {
        gap: 32px;
        grid-template-columns: repeat(1, 15em);
        grid-template-rows: repeat(10, 19em);
        margin-bottom: 1950px;
    }
`

export const Card = styled.li`

    box-sizing: border-box;
    background-color: white;
    border-radius: 0.5em;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 100%;
    position: relative;
    width: 100%;

    .photo {
        height: 8rem;
        margin: 0.7em 3em;
        width: 8rem;
    }

    .title-price {
        align-items: center;
        display: flex;
        gap: 0.75em;
        padding: 0 0.5em;
    }

    .title {
        color: ${fontColor};
        font-size: 1rem;
        font-weight: 400;
        width: 70%;
    }

    .price {
        background: ${tertiaryColor};
        border-radius: 0.5em;
        color: white;
        font-size: 15px;
        font-weight: 700;
        padding: 0.3em 0.5em;
        max-height: 1.8em;
    }

    .description {
        color: ${fontColor};
        font-size: 10px;
        text-align: left;
        padding: 1em;
        width: 100%;
    }

    @media (max-width: 1200px) {
        .photo {
            height: 6rem;
            margin: 0.7em 25%;
            width: 6rem;
        }

        .title {
            font-size: 0.8rem;
        }
    }

    @media (max-width: 620px) {
        .photo {
            height: 7.5rem;
            margin: 0.7em 25%;
            width: 7.5rem;
        }

        .title {
            font-size: 1rem;
        }
    }

    @media (max-width: 480px) {
        .photo {
            height: 8.5rem;
            margin: 0.7em 22%;
            width: 8.5rem;
        }
        
    }
`

export const BuyBtn = styled.a` 
    align-items: center;
    background: ${primaryColor};
    border: none;
    border-radius: 0 0 8px 8px;
    cursor: pointer;
    display: flex;
    gap: 0.5em;
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
    }

`