import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import { addDoc, getFirestore, collection} from "firebase/firestore";
import { useState } from "react";
import {Button, Modal} from "react-bootstrap"
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//-----------------------



const Cart = () => {
    const {cart, totalPrice, clearCart} = useCartContext();

    const order =  { 
        items: cart.map(product => ({id: product.id, title: product.title, value: product.value, quantity: product.quantity})),
        total: totalPrice(),
    }

    const [buyer, setBuyer] = useState(order);
    
    const capturarBuyer = (e) => {
        const {name, value} = e.target;
        setBuyer({...buyer,[name]:value})
    }

        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const guardarBuyer = async() => {
            const db = getFirestore();
            console.log(buyer);
            addDoc(collection(db, "orders"), {
                ...buyer
            }).then(({id}) => {console.log(id)
                 toast.success(`Compra exitosa! tu numero de orden es: ${id}`,{
                    position:"bottom-left",
                    autoClose: false,
                    hideProgressBar:false,
                    closeOnClick:true,
                    pauseOnHover:true,
                    draggable:true,
                    progress:undefined,
                    theme:"colored",})}) 
                 
            setBuyer({...order})
          }

      const Modal1=()=>{
        
        function confirmacion(){
            guardarBuyer();
            handleClose();
        }
    
        return (
          <>
            <Button className="nextButton" onClick={handleShow}>
              Generar orden
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Confirma que tus datos sean correctos</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Nombre: {buyer.name}</p> 
                <p>Email: {buyer.email}</p>  
                <p>Cel: {buyer.phone}</p>
                <p>Dirección: {buyer.address}</p>
                <h5>Total a Pagar: ${totalPrice()}</h5>
                </Modal.Body>
              <Modal.Footer>
                <Button variant="btn btn-dark" onClick={handleClose}>
                  Cancelar
                </Button>
                <Button variant="btn btn-success" onClick={confirmacion}>Confirmar compra</Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }

    //  function redirect({e}){
    //     <Link to = {`/checkorder/${e}`}/> 
    // }


    if(cart.length === 0) {
        return (
            <>
            <div className="m-5 row justify-content-md-center">
                <div className="card m-5 text-center">
                    <p className="card-body m-5">Tu carrito esta vacio!</p>
                    <Link to= "/"><button className="btn btn-block btn-outline-success card-footer">Agregar productos</button></Link>
                </div>
            </div>
            </>
        );
    }

    return(
        <>
        <div className="m-5 pb-5 justify-content-md-center col-6">
        {
            cart.map(product => <ItemCart key={product.id} product={product}/>)
        }
        <div className="text-center m-1">
        <button className="btn btn-dark disabled" onClick= {() => {clearCart()}}>Vaciar carrito</button>
        <div className="container card m-5 border-success">
            <p className="display-4 m-5">Total: ${totalPrice()}</p>
            <form className="m-5">
                <div className="row justify-content-md-center col-auto">
                    <div className="m-3 card card-body ">
                        <input type= "text" name= "name" className="form-control mb-3" placeholder="Ingresa tu nombre" onChange={capturarBuyer} value={buyer.name}/>
                        <input type= "text" name= "email" className="form-control mb-3" placeholder="Ingresa tu email" onChange={capturarBuyer} value={buyer.email}/>
                        <input type= "text" name= "phone" className="form-control mb-3" placeholder="Ingresa tu telefono" onChange={capturarBuyer} value={buyer.phone}/>
                        <input type= "text" name= "address" className="form-control mb-3" placeholder="Ingresa tu dirección" onChange={capturarBuyer} value={buyer.adress}/>
                    </div>
                    <div className="col-4 justify-content-md-center card card-body"> 
                        Ingresa tus datos para generar tu orden de compra!
                        <Modal1/>
                        <ToastContainer/>
                    </div>
                </div>
            </form>
        </div>
        
        </div>
        </div>
        </>
    )
}

export default Cart;