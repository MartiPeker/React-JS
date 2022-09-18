import ItemCount from "./itemCount";

const ItemDetail = ({title, src, info, value, stock}) => {
    return(
    <div className="card col-2">
        <h5 className="card-header text-center">Información</h5>
        <h6 className="text-center">{title}</h6>
        <img className="card-image" src={src} alt={title}/>
        <p className="m-5 description">{info}</p>
        <div className="text-center">
            <p>$ {value}</p>
            <ItemCount stock={stock}></ItemCount>
            <br/>
            <button className="m-5">Agregar al carrito</button>
        </div>
    </div>
    )
  }
  
  export default ItemDetail;