import iconCart from "./iconCart.png";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
    const {totalProducts} = useCartContext();
    return (
        <>
            <img src={iconCart}></img>
            <span className="text-light">{totalProducts() || ""}</span>
        </>
    )
}

export default CartWidget;