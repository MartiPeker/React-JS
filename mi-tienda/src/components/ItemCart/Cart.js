import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
const Cart = () => {
    const {cart, totalPrice, clearCart} = useCartContext();

    if(cart.length === 0) {
        return (
            <>
            <div className="card col-2 text-center">
            <p className="card-body m-5">Tu carrito esta vacio!</p>
            <Link to= "/">Agregar productos</Link>
            </div>
            </>
        );
    }


    return(
        <>
        <p>Este es tu carrito</p>
        {
            cart.map(product => <ItemCart key={product.id} product={product}/>)
        }
        <div className="text-center">
        <button onClick= {() => {clearCart()}}>Vaciar carrito</button>
        <p>Total: {totalPrice()}</p>
        <button>Terminar mi compra</button>
        </div>
        </>
    )
}

export default Cart;