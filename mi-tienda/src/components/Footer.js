
const Footer = () => { 
    return (
    <footer className="bg-dark text-white text-center fixed-bottom">
        <div className="container p-1">
            <section className="mb-1">
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/martiipeker" role="button"
                ><i></i>Instagram</a>
            <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/MartiPeker" role="button"
                ><i>Twitter</i></a>
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/martina-peker-369b161b5/" role="button"
            ><i>Linkedin</i></a>
            <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/MartiPeker" role="button"
                ><i>GitHub</i></a>
            </section>
            <div className="text-center text-white mb-2">
            Peker Art © 2022 Copyright
            </div>
        </div>
        
    </footer>
    );
}

export default Footer;