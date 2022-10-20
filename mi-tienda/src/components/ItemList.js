import {useState, useEffect} from 'react';
import { getFirestore, collection, getDocs } from "firebase/firestore"
import Item from './Item';

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
      <h3 className="display-4 text-center m-5 text-success">Peker Art</h3>
      <div className="m-5 pb-5 justify-content-md-center row">
      {
        productos.map(item =>
          <Item key={item.id}
          id ={item.id}
          title ={item.title} 
          src={item.src} 
          value={item.value}/>
          )
      }
      </div>
      </>
    )
  };

export default ItemList;