import styled from "styled-components"
import { footerColor } from "../UI/Variables"

const StyledFooter = styled.footer`
    align-items: center;
    background-color: ${footerColor};
    display: flex;
    font-size: 12px;
    height: 2.5em;
    justify-content: center;
    width: 100%;
    position: fixed;
    top: calc(100% - 2.5em);
`

export default function Footer() {
  return (
    <StyledFooter>
        MKS sistemas © Todos os direitos reservados
    </StyledFooter>
  )
}
