import {React, useState} from 'react';


function ItemCount ({stock, onAdd, id}) {
    const [cont, setCont] = useState(0);

    const item = {id}

    function contador(operacion) {
        if(operacion === "+" && cont < stock) {
            setCont(cont + 1)
        }else if(operacion === "-" && cont > 0) {
            setCont(cont - 1)
        }
    }


    return (
        <>
            <p>
                Cantidad: {cont} 
            </p>
            <button className='btn btn-danger' onClick={() => contador("+")}>
                +
            </button>
            <button className='btn btn-secondary' onClick={() => contador("-")}>
                -
            </button>
            <button className="m-5"onClick={() => onAdd(item, cont)}>Añadir al carrito</button>
        </>
    );
}


export default ItemCount;