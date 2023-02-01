import CloseCart from "../../assets/images/close_cart.svg"
import { StyledModal } from "./styles";
import 'animate.css';
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
        <StyledModal className="animate__animated animate__fadeInDown" id={id} onClick={handleOutsideClick}>
            <div className="container">
                <img
                    alt="Pressione para fechar o carrinho de compras"
                    src={CloseCart}
                    className="closeBtn"
                    onClick={onClose}
                />
                <div className="content">{children}</div>
            </div>
        </StyledModal>
    )
}
