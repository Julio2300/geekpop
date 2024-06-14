import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsContext";

const ComicsPop = () => {
  const { myItems } = useContext(ProductsContext);

  const comicsPopProducts = myItems.filter((p) => p.categoryId === "Comics");

  return (
    <section className="products container">
      <h2>Figuras que despiertan emociones y recuerdos únicos!</h2>
      <article>
        {comicsPopProducts.map((p) => {
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

export default ComicsPop;