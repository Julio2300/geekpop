import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../contexts/CartContext";

const Footer = () => {

  const { cart } = useContext(CartContext);

  return (
    <footer className="bg-primary text-white">
      <article className="container">
        <Link to="/"><p className="logo-text font-bold text-white"> <span>GEEK POP! STORE</span></p></Link>
          <ul>
            <li>
              <Link to="/" className="font-bold">Home</Link>
            </li>
            <li>
              <Link to="products" className="font-bold">Productos</Link>
            </li>
            <li>
              <Link to="comics-pop" className="font-bold">Comics Pop!</Link>
            </li>
            <li>
              <Link to="contact" className="font-bold">Contáctanos</Link>
            </li>
          </ul>
      </article>
      <article>
        <p className="font-bold">&copy; Julio Armas 2024 </p>
      </article>
    </footer>
  );
};

export default Footer;
