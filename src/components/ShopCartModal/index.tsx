import { StyledModal } from "./styles";
import { ModalTitle, TotalPrice, FinishBtn } from "../ShopCartModal/styles";
import CloseCart from "../../assets/images/close_cart.svg"
import 'animate.css';
import Swal from "sweetalert2";

import { ProductOnCart } from "../ProductOnCart";
import { useAppSelector } from "../../hooks/useAppDispatch";
import { getMemoizedNumItems, getTotalPrice } from "../../store/slices/cartSlice";
interface ModalProps {
    id?: string;
    onClose: () => void;
    children?: React.ReactNode
}

export function ShopCartModal({ id = "modal", onClose = () => {}, children }:ModalProps) {

    const handleOutsideClick = (e: any) => {
        if(e.target.id == id) onClose();
    }

    const numItems = useAppSelector(getMemoizedNumItems);
    const totalPrice = useAppSelector(getTotalPrice)  

    return (
        <StyledModal id={id} className="animate__animated animate__fadeInDown"  onClick={handleOutsideClick}>
            <div className="container">
                <img
                    alt="Pressione para fechar o carrinho de compras"
                    src={CloseCart}
                    className="closeBtn"
                    onClick={onClose}
                    
                />

                <div className="content">
                    <ModalTitle>Carrinho <br/>de compras</ModalTitle>

                    <ProductOnCart />

                    <TotalPrice>
                        <p className="totalText">Total</p>
                        <p className="totalText">R${totalPrice}</p>
                    </TotalPrice>
                </div>

                <FinishBtn onClick={() => {
                            if (numItems > 0) {
                                Swal.fire({
                                    title: 'Compra finalizada com sucesso!',
                                    icon: 'success',
                                    showConfirmButton: false,
                                    showClass: {
                                        popup: 'animate__animated animate__fadeInDown'
                                    },
                                    hideClass: {
                                        popup: 'animate__animated animate__fadeOutUp'
                                    }
                                })
                                setTimeout(function() { 
                                    window.location.reload()
                                 }, 1000)
                            } else {
                                Swal.fire({
                                    title: 'O carrinho não pode estar vazio!',
                                    icon: 'error',
                                    showConfirmButton: false,
                                    timer: 1500,
                                    showClass: {
                                        popup: 'animate__animated animate__fadeInDown'
                                    },
                                    hideClass: {
                                        popup: 'animate__animated animate__fadeOutUp'
                                    }
                                })
                            }
                        }}>
                            Finalizar Compra
                        </FinishBtn>
            </div>
        </StyledModal>
    )
}
