import {Link} from 'react-router-dom';

const Item = ({id, title, src, value}) => {
    return (
    <>
        <div className="col-4 card text-center border-primary m-3 d-flex flex-column align-self-end" style={{ width: 400, height:475}}>
          <h6 className="card-header bg-primary text-white mb-5">{title}</h6>
            <div className="text-center">
                <img className="card-image overflow-hidden" style={{width: 250, height:250}} src={src} alt={title}/>
            </div>
            <div className="text-end mt-5">
                <h5>Valor: ${value}</h5>
                <Link to={`/item/${id}`}><button className="btn btn-block btn-outline-success card-footer">Detalles</button></Link>
            </div>
        </div>         
    </>
    )
}

export default Item;