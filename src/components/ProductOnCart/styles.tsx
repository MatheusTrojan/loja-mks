import styled from "styled-components";
import { fontColor } from "../UI/Variables"

export const CartCardList = styled.ul`
    display: flex;
    flex-direction: column;
    height: 70vh;
    overflow-y: scroll;

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
    }
`