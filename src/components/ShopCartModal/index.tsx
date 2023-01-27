import styled from "styled-components"
import { primaryColor } from "../UI/Variables"

const StyledModal = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    height: 100vh;
    justify-content: right;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;

    .container {
        background-color: ${primaryColor};
        box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
        color: white;
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 450px;
    }

    .close {
        background-color: black;
        border: none;
        border-radius: 50%;
        height: 35px;
        outline: none;
        cursor: pointer;
        width: 35px;
        right: calc(-100% + 50px);
        top: 25px;
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

    }
`

interface ModalProps {
    id?: string;
    onClose: () => void;
    children?: React.ReactNode
}

export function ShopCartModal({ id = "modal", onClose = () => {}, children }:ModalProps) {

    const handleOutsideClick = (e: any) => {
        if(e.target.id == id) onClose();
    }

    return (
        <StyledModal id={id} onClick={handleOutsideClick}>
            <div className="container">
                <button className="close" onClick={onClose}/>
                <div className="content">{children}</div>
            </div>
        </StyledModal>
    )
}
