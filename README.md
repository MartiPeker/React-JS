En mi tienda incorporo los conocimientos adquiridos en el curso de React-Js de CoderHouse.
Profesor: Pablo Monteserin.

GIF: https://firebasestorage.googleapis.com/v0/b/react-peker.appspot.com/o/Peker.gif?alt=media&token=0e5e533d-3340-472b-8dcb-685b9b4de035

GIF del detalle de cantidad en Cart (No se veia muy bien en el gif principal) https://firebasestorage.googleapis.com/v0/b/react-peker.appspot.com/o/Peker.detailCart.gif?alt=media&token=5d481302-38f4-4184-999f-313c757e1f6c

En mi estructura incluyo los siguientes componentes:
-ItemContainer (que contiene ItemList).
-ItemList (Mapea todos los objetos de la base de datos).
-Item (estructura de cada item)
-ItemDetailContainer (es quien se encarga de mostrar los detalles de cada Item, obteniendo el id correspondiente de useParams y pasando los datos a ItemDetail)
-ItemDetail (recibe los datos del detalle del item, por medio de itemDetailContainer)
-Category (Filtra los Item por categoria y los mapea bajo ese parametro nuevamente con ItemList)
-Cart (Muestra los productos seleccionados, la cantidad y el subtotal de cada uno, muestra el precio total de todos los productos en conjunto. Para proceder a la compra se llena un formulario cual, muestra un Modal que pide confirmar los datos. Una vez confirmados los datos, se genera una orden.)
-Router.
-Navbar.
-App.
-Sobre mi.

Dependencias instaladas: react-router-dom, react-bootstrap, react-toastify = La útilizo para mostrarle la orden al cliente con un popup al confirmar la orden.
