import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import {useParams} from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const {id} = useParams();

    const [details, setDetails] = useState({})
    // const getItem = () => new Promise((resolve, rejected) => {
    //     setTimeout(() => resolve(producto.find(producto => producto.id === Number(id))), 1000)
    // })

    useEffect(() => {
        //Traer Firestore
        const querydb = getFirestore();
        //Decimos en que tabla esta el id
        const queryDoc = doc(querydb, "productos", id)
        //Traemos el producto
        getDoc(queryDoc)
        .then(res => setDetails({id: res.id, ...res.data()}))

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