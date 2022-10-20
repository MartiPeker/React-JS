import { useParams } from "react-router-dom";
import { getDocs, collection, getFirestore, where } from "firebase/firestore";
import { useEffect, useState } from "react";

const Orden = () =>{
    const id = useParams();
    const [order, setOrder] = useState([]);

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "orders");
        if(id){
          const queryFilter = querydb(queryCollection, where("orders", "==", id))
          getDocs(queryFilter)
        .then(res => setOrder ( res.docs.map(order => ({id: order.id, ...order.data()}))))
        }else{
        getDocs(queryCollection)
        .then(res => setOrder ( res.docs.map(order => ({id: order.id, ...order.data()}))))
        }
}, [id]);
    return (
        <>
        <div className="m-5 pb-5 justify-content-md-center row">
        Tu orden es: {order}
      </div>
        </>
    )


}

export default Orden;