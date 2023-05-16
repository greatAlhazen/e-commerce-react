import "./category.styles.scss";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { image, title } = category;

  return (
    <div className="category">
      <div
        className="category__image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="category__detail">
        <h1 className="category__title">{title}</h1>

        <Link
          to={`/shop/${title.toLowerCase()}`}
          className="category__sub-title"
        >
          Shop
        </Link>
      </div>
    </div>
  );
};

export default Category;
