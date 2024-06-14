import { Link } from "react-router-dom";

const HeroHeader = () => {
  return (
    <header style={{ background: '#F3F3F3' }}>
      <div className="container" style={{ padding: '50px 0', height: '70vh' }}>
        <article>
          <h1 style={{ color: '#c21010', padding: '30px 0' }}>¡Tu tienda de Funko Pop para coleccionistas!</h1>
          <p className="text-primary">
            En nuestra tienda de Funko Pops, compartimos una pasión inigualable por los universos fascinantes como Star Wars, los impresionantes cómics de Marvel y las increíbles películas que han dado forma a la cultura pop geek. Somos más que una tienda; somos una comunidad de aficionados y coleccionistas que valoran cada detalle y cada historia detrás de estos personajes icónicos.
          </p>
          <p>Únete a nosotros en esta aventura y descubre la maravilla de coleccionar Funko Pops. Nuestra tienda está diseñada para ser tu refugio geek, donde cada visita te sumerge en un mundo de nostalgia, emoción y camaradería. ¡Ven y encuentra tus personajes favoritos y mucho más en nuestra tienda de Funko Pops!</p>
          <button style={{ backgroundColor: 'black', color: 'white' }}><Link to="products" style={{ color: 'white' }}>Ordena ahora!</Link></button>
          <button style={{ marginLeft: '12px', backgroundColor: 'transparent', border: '2px solid black', color: '#444444' }}><Link to="contact" style={{ color: '#444444' }}>Contáctanos</Link></button>
        </article>
      </div>
    </header>
  );
};

export default HeroHeader;