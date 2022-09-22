import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import producto from "../data/productos.json";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const {id} = useParams();

    const [details, setDetails] = useState({})
    const getItem = () => new Promise((resolve, rejected) => {
        setTimeout(() => resolve(producto.find(producto => producto.id === Number(id))), 1000)
    })

    useEffect(() => {
        getItem().then((data) => {
            setDetails(data)
        });

    }, []);

    return (
        <>
        {<div>
            <ItemDetail
                id={details.id}
                title={details.title} 
                src= {details.src} 
                info={details.info} 
                value={details.value} 
                stock={details.stock}/>
        </div>}
        </>
   )
}

export default ItemDetailContainer;