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
`

export const TotalPrice = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 1.5em;

    .totalText {
        font-size: 1.6em;
        font-weight: 700;
    }
`

export const ModalTitle = styled.h2`
    font-size: 1.7em;
    font-weight: 700;
    line-height: 1.25em;
    margin: 0 1em;
    width: 50%;
`