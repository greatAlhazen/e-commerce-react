import "./categories.styles.scss";
import Category from "../category/Category";

const Categories = ({ categories }) => {
  return (
    <div className="categories-box">
      {categories.map((category) => {
        return <Category category={category} key={category.id} />;
      })}
    </div>
  );
};

export default Categories;
