import styled from "styled-components"
import { CloseBtn } from "../UI";
import { primaryColor } from "../UI/Variables"
import { useAppSelector } from "../../hooks/useAppDispatch";


const StyledModal = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    height: 80vh;
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
        height: 100vh;
        width: 450px;
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
                <CloseBtn onClick={onClose}/>
                <div className="content">{children}</div>
            </div>
        </StyledModal>
    )
}
