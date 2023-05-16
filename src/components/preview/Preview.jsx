import "./preview.styles.scss";
import Product from "../product/Product";
import { Link } from "react-router-dom";

const Preview = ({ title, products }) => {
  return (
    <div className="preview-container">
      <h2 className="preview-container__title">
        <Link
          to={`/shop/${title}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview-container__preview">
        {products
          .filter((_, index) => index < 3)
          .map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Preview;
