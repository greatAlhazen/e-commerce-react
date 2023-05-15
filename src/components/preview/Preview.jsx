import "./preview.styles.scss";
import Product from "../product/Product";

const Preview = ({ title, products }) => {
  return (
    <div className="preview-container">
      <h2 className="preview-container__title">{title.toUpperCase()}</h2>
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
