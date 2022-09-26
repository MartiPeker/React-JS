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
    <div className="card col-2">
        <h5 className="card-header text-center">Información</h5>
        <h6 className="text-center">{title}</h6>
        <img className="card-image" src={src} alt={title}/>
        <p className="m-5 description">{info}</p>
        <div className="text-center">
            <p>$ {value}</p>
            {show ? <Link to = "/cart/"><button>Ir al carrito</button></Link> :  
            <ItemCount stock={stock} onAdd = {onAdd} id={id} src={src} value={value} title={title} min={1} show={show}></ItemCount>}   
        </div>
    </div>
    )
  }
  
  export default ItemDetail;