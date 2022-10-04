import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
    const {cart, totalPrice, clearCart} = useCartContext();

    const order =  {
        buyer: {
            name: "Martina",
            email: "martinaivanapeker@gmail.com",
            phone: "numerofalso123",
            address: "Siempre Viva 746"
        },
        items: cart.map(product => ({id: product.id, title: product.title, value: product.value, quantity: product.quantity})),
        total: totalPrice(),
    }

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

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({id}) =>console.log(id))
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
        <button onClick={handleClick}>Pagar</button>
        </div>
        </>
    )
}

export default Cart;