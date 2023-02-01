import styled from "styled-components";
import { fontColor, tertiaryColor } from "../UI/Variables"

export const CartCardList = styled.ul`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 60vh;
    overflow-y: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background-color: #4e494990;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #ffffffc3;
        border: 1px solid grey;
        border-radius: 8px;
    }
`

export const CartCard = styled.li`
    align-items: center;
    background-color: white;
    border-radius: 0.5em;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: 6em;
    margin: 1.25em 1.75em;
    width: 375px;
    position: relative;

    .cartCard__image {
        padding: 0.5em;
        width: 6em;
    }

    .cartCard__title {
        color: ${fontColor};
        font-size: 12px;
        font-weight: 400;
        justify-self: left;
    }

    .cartCard__quantity {
        align-items: center;
        grid-column: 3/4;
        color: ${fontColor};
        margin: 0 1.5rem 0.5rem 1.5rem;
    }

    .cartCard__quantity p {
        font-size: 0.5rem;
        margin: 0.15rem 0;
    }

    .cartCard__button--container {
        align-items: center;
        border: 0.3px solid #BFBFBF;
        border-radius: 8px;
        display: flex;
        justify-content: space-between;
        width: 70px;
    }

    .cartCard__button {
        background-color: transparent;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 12px;
        padding: 0.4rem 0.5rem;
        transition: 0.3s ease-in-out;

        :hover {
            background-color: #bfbfbf24;
        }
    }

    .cartCard__quantity--value {
        color: ${fontColor};
        border: 0.3px solid #BFBFBF;
        border-width: 0 0.3px;
        font-size: 0.8rem;
        padding: 0 0.35rem;
    }

    .cartCard__price {
        color: ${fontColor};
        font-size: 16px;
        font-weight: 700;
    }

    .cartCard__delete {
        color: black;
        position: absolute;
        right: -5px;
        top: -5px;
        cursor: pointer; 
        width: 18px;

        :hover {
            transform: scale(1.125);
        }
    }

    @media (max-width: 520px) {
        grid-template-columns: 90px 90px 75px 75px;
        width: 330px;

        .cartCard__quantity {
            align-items: left;
            margin: 0 0 0.5rem 0;
            width: 100%;
        }

        .cartCard__price {
            margin: 0 5px;
        }
    }

    @media (max-width: 470px) {
        align-items: center;
        column-gap: 10px;
        grid-template-columns: 50% 50%;
        grid-template-rows: 50px 55px 40px 55px;
        height: 220px;
        justify-content: center;
        padding: 0.5rem;
        margin: 0.5em 1.75em;
        width: 250px;

    .cartCard__image {
        grid-column: 1/3;
        grid-row: 1/3;
        justify-self: center;
        padding: 0.5em;
        width: 7.5rem;
    }

    .cartCard__title {
        font-size: 16px;
        grid-column: 1/3;
        grid-row: 3/3;
        justify-self: center;
    }

    .cartCard__quantity {
        align-items: center;
        grid-column: 1/2;
        grid-row: 4/4;
        margin: 0 1.5rem 0.3rem 1.5rem;
    }

    .cartCard__quantity p {
       display: none;
    }

    .cartCard__button--container {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background-color: white;
        border: 0.3px solid #dadada89;
        border-radius: 4px;
        width: 100px;
    }

    .cartCard__button {
        font-size: 22px;
        padding: 0.2rem 0.5rem;
    }

    .cartCard__quantity--value {
        color: black;
        border: 0.3px solid #dadada89;
        border-width: 0 0.3px;
        font-size: 1.2rem;
        padding: 0 0.8rem;
    }

    .cartCard__price {
        justify-self: center;
        background-color: ${tertiaryColor};
        border-radius: 0.5em;
        color: white;
        padding: 0.6em 0.8em;
        grid-column: 2/2;
        grid-row: 4/4;
        font-size: 15px;
    }

    .cartCard__delete {
        position: absolute;
        right: 0;
        top: 0;
        filter: invert(1);
        width: 50px;
    }
}`