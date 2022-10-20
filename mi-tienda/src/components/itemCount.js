import {React, useState} from 'react';


function ItemCount ({stock, onAdd, id, src, title, value}) {
    const [cont, setCont] = useState(1);

    const item = {id, src, title, value}

    function contador(operacion) {
        if(operacion === "+" && cont < stock) {
            setCont(cont + 1)
        }else if(operacion === "-" && cont > 0) {
            setCont(cont - 1)
        }
    }


    return (
        <>
        <div className='container'>
            <div className='col-auto'>
            <p>
                Cantidad: {cont} 
            </p>
            <button className='btn btn-success m-1' onClick={() => contador("+")}>
                +
            </button>
            <button className='btn btn-outline-dark' onClick={() => contador("-")}>
                -
            </button>
            </div>
            <button className="m-5 col-auto btn btn-outline-success" onClick={() => onAdd(item, cont)}>Añadir al carrito</button>
            </div>
        </>
    );
}


export default ItemCount;