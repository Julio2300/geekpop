import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../contexts/CartContext";
import { MdOutlineMenu } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BsCart } from "react-icons/bs";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <nav>
      <Link to="/">
        <p className="logo-text">
          <span>GEEK POP!</span> Store
        </p>
      </Link>

      <ul className="desktop_menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="products">Productos</Link>
        </li>
        <li>
          <Link to="comics-pop">Comics Pop!</Link>
        </li>
        <li>
          <Link to="contact">Contáctanos</Link>
        </li>
        <li>
          <Link to="cart">
            <BsCart size={23} /> <span>({cart.length})</span>
          </Link>
        </li>
      </ul>

      <div
        onClick={handleToggle}
        style={{ marginBottom: "15px" }}
        className="toggle_icon"
      >
        {toggleMenu ? <IoIosCloseCircleOutline /> : <MdOutlineMenu />}
      </div>

      <ul className={`${toggleMenu ? "mobile_menu_show" : "mobile_menu_hide"}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="products">Productos</Link>
        </li>
        <li>
          <Link to="comics-pop">Comics Pop!</Link>
        </li>
        <li>
          <Link to="contact">Contáctanos</Link>
        </li>
        <li>
          <Link to="cart">
            <BsCart size={23} /> <span>({cart.length})</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
