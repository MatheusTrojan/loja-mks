import styled from "styled-components"
import { primaryColor } from "../UI/Variables";

import CloseCart from "../../assets/images/close_cart.svg"


const StyledModal = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    height: 100%;
    justify-content: right;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    /* overflow-y: auto; */

    .container {
        background-color: ${primaryColor};
        box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
        color: white;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 450px;
    }

    .closeBtn {
        color: black;
        cursor: pointer;
        position: absolute;
        right: 25px;
        top: 25px;
        z-index: 1;
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
                <img
                    src={CloseCart}
                    className="closeBtn"
                    onClick={onClose}
                />
                <div className="content">{children}</div>
            </div>
        </StyledModal>
    )
}
