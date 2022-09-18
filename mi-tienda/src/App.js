import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailsContainer";
import ItemListContainer from "./data/ItemListContainer";
import Navbar from "./components/NavBar";
import Category from "./components/Category";


function App() {
  
  return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element= {<ItemListContainer/>}/>
          <Route path="/category/" element= {<Category/>}/>
          <Route path={"/item/:id"} element={<ItemDetailContainer titulo="Detalles"/>}></Route>
          <Route path='*' element={<h1>Error 404</h1>}></Route>
        </Routes>
      </BrowserRouter>
      
  );
}

export default App;
