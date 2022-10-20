import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailsContainer";
import ItemListContainer from "./data/ItemListContainer";
import Navbar from "./components/NavBar";
import Category from "./components/Category";
import Cart from "./components/ItemCart/Cart";
import CartProvider from "./context/CartContext";
import Footer from "./components/Footer";
import Sobremi from "./components/Sobremi";

function App() {
  
  return (
  <CartProvider>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element= {<ItemListContainer/>}/>
        <Route path={"/category/:category"} element= {<Category/>}/>
        <Route path={"/item/:id"} element={<ItemDetailContainer titulo="Detalles"/>}/>
        <Route path={"/cart/"} element={<Cart/>}/>
        <Route path={"/sobremi"} element={<Sobremi titulo="Sobre mi"/>}/>
        <Route path='*' element={<h1>Error 404</h1>}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
  </CartProvider>
  
  );
}

export default App;
