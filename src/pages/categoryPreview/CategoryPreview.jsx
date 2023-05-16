import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import Preview from "../../components/preview/Preview";

const CategoryPreview = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return <Preview key={title} title={title} products={products} />;
      })}
    </>
  );
};

export default CategoryPreview;
