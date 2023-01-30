import CloseCart from "../../assets/images/close_cart.svg"
import { StyledModal } from "./styles";
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
