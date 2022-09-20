import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./itemCount";

const ItemDetail = ({title, src, info, value, stock}) => {

    const [show, setshow] = useState(false)

    const onAdd = () => {
        setshow(true)
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
            <ItemCount stock={stock} onAdd = {onAdd} min={1} show={show}></ItemCount>}     
        </div>
    </div>
    )
  }
  
  export default ItemDetail;