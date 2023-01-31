import { useState } from "react"

import { ShopCartModal } from "../ShopCartModal";
import { ProductOnCart } from "../ProductOnCart"

import { useAppSelector } from "../../hooks/useAppDispatch";
import { getMemoizedNumItems } from "../../store/slices/cartSlice"; 
import { getTotalPrice } from "../../store/slices/cartSlice";

import ShoppingCart from "../../assets/images/shopping_cart.svg"
import { StyledHeader, Subtitle, Title, TitleWrapper, CartBtn, FinishBtn, Icon, ModalTitle, TotalPrice } from "./styles";
import Swal from "sweetalert2";
import 'animate.css';

export function Header() {

    const numItems = useAppSelector(getMemoizedNumItems);
    
    const [isModalVisible, setIsModalVisible] = useState(false)
    
    const totalPrice = useAppSelector(getTotalPrice)    

    return (
        <StyledHeader>
            <TitleWrapper>
                <Title>MKS</Title>
                <Subtitle>Sistemas</Subtitle>
            </TitleWrapper>

            <CartBtn onClick={() => setIsModalVisible(true)}>
                <Icon src={ShoppingCart} alt="Carrinho de Compras"/>
                <span>{ numItems }</span>
            </CartBtn>
            {isModalVisible ? (
                <ShopCartModal onClose={() => setIsModalVisible(false)}>
                    <>
                        <ModalTitle>Carrinho <br/>de compras</ModalTitle>

                        <ProductOnCart />

                        <TotalPrice>
                            <p className="totalText">Total</p>
                            <p className="totalText">R${totalPrice}</p>
                        </TotalPrice>

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
                                setIsModalVisible(false)
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    showConfirmButton: false,
                                    timer: 1500,
                                    title: 'O carrinho não pode estar vazio!',
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
                    </>
                </ShopCartModal> 
                ) : null}

        </StyledHeader>
    )
};
