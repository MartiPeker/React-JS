import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./itemCount";
import  { useCartContext } from "../context/CartContext";

const ItemDetail = ({id, title, src, info, value, stock}) => {


    const [show, setshow] = useState(false)
    const {addProduct} = useCartContext();

    const onAdd = (item, quantity) => {
        setshow(true)
        addProduct(item, quantity)
    }

    return(
        
        <section className="row justify-content-md-center col-auto m-5">
        <div className="card mb-3 text-center col-4 border-primary">
            <h5 className="card-header bg-primary text-center text-light">Información</h5>
            <h6 className="text-center p-3">{title}</h6>
            <img className="card-image" src={src} alt={title}/>
            <p className="description">{info}</p>
            <div className="text-center">
                <h4 className="mb-5">${value}</h4>
                {show ? <Link to = "/cart/"><button className="btn btn-block btn-outline-success mb-1">Ir al carrito</button></Link> :  
                <ItemCount stock={stock} onAdd = {onAdd} id={id} src={src} value={value} title={title} min={1} show={show}></ItemCount>}  
            </div>
        </div>
    </section>
    )
  }
  
  export default ItemDetail;