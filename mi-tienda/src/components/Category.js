import {useState, useEffect} from 'react';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"
import Item from './Item';
import { useParams } from 'react-router-dom';

const Category = () => {
    <></>
    const [productos, setItem] = useState([]);

    const {category} = useParams();
    console.log(category);

      useEffect(() => {
          const querydb = getFirestore();
          const queryCollection = collection(querydb, "productos");
          if(category){
            const queryFilter = query(queryCollection, where("category", "==", category))
            getDocs(queryFilter)
          .then(res => setItem ( res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
          }else{
          getDocs(queryCollection)
          .then(res => setItem ( res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
          }
  }, [category]);

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

export default Category;