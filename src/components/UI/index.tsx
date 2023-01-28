import styled from "styled-components";

export const Icon = styled.img`
    height: 1.15em;
    width: 1.15em;
`;

export const FinishBtn = styled.button`
    background-color: black;
    color: white;
    cursor: pointer;
    font-size: 1.75em;
    font-weight: 700;
    height: 100px;
    position: relative;
    top: 100%;
    width: 100%;
`;

export const CloseBtn = styled.button`
    background-color: black;
    border: none;
    border-radius: 50%;
    height: 35px;
    outline: none;
    cursor: pointer;
    width: 35px;
    right: calc(-100% + 55px);
    top: 40px;
    position: relative;
    ::before,
    ::after {
        content: " ";
        position: absolute;
        top: 25%;
        left: 48%;
        width: 1.5px;
        height: 18px;
        background-color: white;
    }
    :before {
        transform: rotate(45deg);
    }
    :after {
        transform: rotate(-45deg);
    }
`;

export const TotalPrice = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 1.5em;

    .totalText {
        font-size: 1.6em;
        font-weight: 700;
    }
`;

export const ModalTitle = styled.h2`
    font-size: 1.7em;
    font-weight: 700;
    line-height: 1.25em;
    margin: 0 1em;
    width: 50%;
`;
