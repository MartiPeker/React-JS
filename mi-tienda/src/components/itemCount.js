import {React, useState} from 'react';


function ItemCount ({stock}) {
    const [cont, setCont] = useState(0);

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
        </>
    );
}


export default ItemCount;