import React, {useState, useContext, useEffect} from "react";


const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {

    const[cart, setCart] = useState([]);

    console.log("En el carrito:", cart);

    const addProduct = (item,quantity) => {
        if (isInCart(item.id)){
          setCart(cart.map(producto => {
            return producto.id === item.id ? { ...producto, quantity : producto.quantity + quantity} : producto
          }));
        } else{
          setCart ([...cart, { ...item, quantity}]);
        }
      }

      const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.value, 0);
      }

      const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

        const clearCart = () => setCart([]);

        const isInCart = (id) => cart.find(producto => producto.id === id) ? true : false;
        
        const removeProduct = (id) => setCart(cart.filter(producto => producto.id !== id));

    return(
        <CartContext.Provider value= {{
            addProduct,
            clearCart,
            isInCart,
            removeProduct,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;