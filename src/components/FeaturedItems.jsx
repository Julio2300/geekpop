import { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsContext";

const FeaturedItems = () => {
  const { myItems } = useContext(ProductsContext);

  const featuredProducts = myItems.filter((prod) => prod.categoryId === "best sellers");

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  let deviceType = "desktop";

  return (
    <section className="featuredItems container">
      <h2>Los mas vendidos!</h2>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={deviceType !== "mobile" ? true : false}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {featuredProducts.map((prod) => {
          return (
            <div className="item" key={prod.id}>
              <Link to={`/single/${prod.id}`}>
                <img
                  className="product_image"
                  src={prod.imageId}
                  alt="product_image"
                  height="250px"
                  width="90%"
                  style={{ borderRadius: "5px" }}
                />
                <h3>{prod.title}</h3>
                <p style={{ color: "#282626" }}>${prod.price}</p>
              </Link>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};

export default FeaturedItems;