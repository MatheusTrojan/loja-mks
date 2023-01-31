import styled from "styled-components";

export const SkeletonList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    list-style: none;
    height: 18.2em;
`

export const SkeletonCard = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    background-color: white;
    border-radius: 0.5em;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 100%;
    gap: 30px;
    width: 14em;
`