import { useCartContext } from "../../context/CartContext";

const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext();
    return (
        <div className= " card m-3 col-4 border-success container">
            <p className="card-header bg-success text-light">Producto: {product.title}</p>
            <img className="card-image m-5" src={product.src} alt={product.title}/>
            <div className="container row">
                <div className="col m-3">
                    <h5>Cantidad: {product.quantity}</h5>
                    <h5>Precio c/u: {product.value}</h5>
                </div>               
                <div className="col-8 text-end">
                <h5 className="card m-2">Subtotal: ${product.quantity * product.value}</h5>
                </div>
                <button className="btn btn-outline-dark btn-block m-1" onClick= {() => {removeProduct(product.id)}}>Eliminar</button>
            </div>
        </div>
        
    )
}

export default ItemCart;