import React, {useState, useContext} from "react";
import ItemList from "../components/ItemList";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const[cart, setCart] = useState([]);

    console.log("En el carrito:", cart);

    const addProduct = (item,quantity) => {
        if (isInCart(item.id)){
            console.log("entro al if")
          setCart(cart.map(producto => {
            return producto.id === item.id ? { ...producto, quantity : producto.quantity + quantity} : producto
          }));
        } else{
            console.log("no entro al if")
          setCart ([...cart, { ...item, quantity}]);
        }
      }

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(producto => producto.id === id) ? true : false;
    
    const removeProduct = (id) => setCart(cart.filter(producto => producto.id !== id));

    return(
        <CartContext.Provider value= {{
            addProduct,
            clearCart,
            isInCart,
            removeProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;