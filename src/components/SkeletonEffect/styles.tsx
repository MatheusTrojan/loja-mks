import styled from "styled-components";

export const SkeletonList = styled.ul`
    display: grid;
    gap: 25px;
    grid-template-columns: repeat(4, 14em);
    grid-template-rows: repeat(2, 18.2em);
    height: 100%;
    list-style: none;
    width: 100%;

    @media (max-width: 1200px) {
        gap: 16px;
        grid-template-columns: repeat(4, 12.5em);
        grid-template-rows: repeat(2, 17em);

    }

    @media (max-width: 840px) {
        grid-template-columns: repeat(3, 12em);
        grid-template-rows: repeat(3, 16.5em);
    }

    @media (max-width: 620px) {
        grid-template-columns: repeat(2, 14em);
        grid-template-rows: repeat(5, 18em);
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(1, 15em);
        grid-template-rows: repeat(10, 19em);
    }
`

export const SkeletonCard = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 0.5em;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 100%;
    width: 100%;
`