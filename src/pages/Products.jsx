import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsContext";

const Products = () => {
  const { myItems } = useContext(ProductsContext);

  return (
    <section className="products container">
      <h2>Descubre nuestros productos!</h2>
      <article>
        {myItems.map((p) => {
          return (
            <div key={p.id} className="item">
              <Link to={`/single/${p.id}`}>
                <img src={p.imageId} alt={p.title} />
                <h3>{p.title}</h3>
                <p style={{ color: "#282626" }}>${p.price}</p>
              </Link>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Products;