import styled from "styled-components";

export const Icon = styled.img`
    height: 1.15em;
    width: 1.15em;
`;

export const FinishBtn = styled.button`
    background-color: black;
    color: white;
    position: relative;
    top: 100%;
    font-size: 1.75em;
    font-weight: 700;
    height: 100px;
    width: 100%;
`

export const TotalPrice = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 2em;

    .totalText {
        font-size: 1.6em;
        font-weight: 700;
    }

`