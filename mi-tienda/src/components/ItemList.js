import {useState, useEffect} from 'react';
import { getFirestore, collection, getDocs } from "firebase/firestore"
import Item from './Item';
import { useParams } from 'react-router-dom';

const ItemList = () => {
    <></>
    const [productos, setItem] = useState([]);

    useEffect(()=>{
      const querydb = getFirestore();
      const queryCollection = collection(querydb, "productos");
      getDocs(queryCollection)
      .then(res => setItem ( res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
    }, []);
  
    return (
      <>
      <div className="row">
      {
        productos.map(item =>
          <Item key={item.id}
          id ={item.id}
          title ={item.title} 
          src={item.src} 
          value={item.value}/>)
      }
      </div>
      </>
    )
  };

export default ItemList;