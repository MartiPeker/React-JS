import {useState, useEffect} from 'react';
import getData from '../components/getData';
import Item from './Item';

const ItemList = () => {
    <></>
    const [producto, setItem] = useState([]);
    useEffect(()=>{
      getData().then((data) => {
        setItem(data);
      })
    }, []);
  
    return (
      <>
      <div className="row">
      {
        producto.map(item =>
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