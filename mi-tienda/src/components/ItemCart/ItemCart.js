import { useCartContext } from "../../context/CartContext";

const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext();
    return (
        <div className= "card m-3 text-center col-5">
            <p className="card-header">Producto: {product.title}</p>
            <img className="card-image m-5" src={product.src} alt={product.title}/>
            <div>                
                <p>Cantidad: {product.quantity}</p>
                <p>Precio c/u: {product.value}</p>
                <p>Subtotal: ${product.quantity * product.value}</p>
                <button onClick= {() => {removeProduct(product.id)}}>Eliminar</button>
            </div>
        </div>
        
    )
}

export default ItemCart;