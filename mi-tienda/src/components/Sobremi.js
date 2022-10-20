import { Navbar } from "react-bootstrap";
import Footer from "./Footer"

const Sobremi = () => {
    return (
        <>
        <Navbar/>
        <div className="container-sm justify-content-center">
            <h2 className="display-5 text-center mt-5 text-success">Sobre mi</h2>
            <p className="text-center text-success">(Un poquito al menos)</p>
            <div class="col"/>
                <div class="container-sm mb-5 row align-items-center"> 
                    <div class="col-md-6 card">
                        <h2 class="text-center text-success display-6">Marti Peker</h2>
                        <p class="lead text-success">Hola! Acá esta la responsable de todo esto.
                         Me llamo Martina Peker, tengo 23 años y he dedicado casi todo ese tiempo en dibujar, pintar y sentir.
                         Lo que otras personas quizás llaman hobbie, yo lo veo como una manera de sobrevivir y movilizarme día a día.
                         Así y todo no hace mucho me he animado a subir mis trabajos, este es un intento de compartir todo ese amor que día a día sale de mi. 
                         Actualmente estoy aprendiendo a desarrollar con la motivación de algún día llevar mi arte al mundo de los videojuegos. 
                         Es mi primera presentación... no se que más escribir en realidad.
                        </p>
                    </div>
                    <div class="col mt-5">
                        <img class= "img-sm-full img-sm rounded mb-3" src="https://firebasestorage.googleapis.com/v0/b/react-peker.appspot.com/o/Yo.jpg?alt=media&token=fdd61828-6d68-490c-9f2e-5d51ae4ba0dd" alt="Marti" height={500}/>
                </div>                        
            </div>
        </div>
        <Footer/>
        </>
    )

}

export default Sobremi;