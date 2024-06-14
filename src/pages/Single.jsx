import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsContext";
import CartContext from "../contexts/CartContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Tooltip from "@mui/material/Tooltip";

const Single = () => {
  const { myItems } = useContext(ProductsContext);
  const { cart, setCart } = useContext(CartContext);
  const params = useParams();
  const navigate = useNavigate();

  const product = myItems.find((item) => item.id === params.id);

  const [selectedQty, setSelectedQty] = useState(1);

  const handleQtyChange = (event) => {
    setSelectedQty(event.target.value);
  };

  const addToCart = (event) => {
    event.preventDefault();

    const itemInCart = cart.find((item) => item.id === product.id);

    if (itemInCart) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, qty: item.qty + parseInt(selectedQty) }
          : item
      );
      setCart(updatedCart);
    } else {
      const newCartItem = {
        id: product.id,
        name: product.title,
        price: product.price,
        img: product.imageId,
        desc: product.description,
        category: product.categoryId,
        qty: parseInt(selectedQty),
      };
      setCart((prevCart) => [...prevCart, newCartItem]);
    }

    navigate("/products");
  };

  return (
    <section className="single container">
      <h2>Descripción del producto</h2>
      <article>
        <div>
          <img src={product.imageId} alt={product.title} />
        </div>
        <div>
          <h3>{product.title}</h3>
          <div className="price">${product.price}</div>
          <p>{product.description}</p>
          <form onSubmit={addToCart}>
            <label>Cantidad</label>
            <select name="selectQty" onChange={handleQtyChange} value={selectedQty}>
              {[...Array(parseInt(product.stock)).keys()].map((qty) => (
                <option key={qty + 1} value={qty + 1}>
                  {qty + 1}
                </option>
              ))}
            </select>
            <button type="submit">
              <Tooltip title="Add to cart">
                <AddShoppingCartIcon />
              </Tooltip>
            </button>
          </form>
          <hr />
          <span>Categoría: </span>
          <span>{product.categoryId}</span>
        </div>
      </article>
    </section>
  );
};

export default Single;
