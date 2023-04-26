import "./category.styles.scss";

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
        <span className="category__sub-title">Shop</span>
      </div>
    </div>
  );
};

export default Category;
