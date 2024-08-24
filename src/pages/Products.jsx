import ProductItem from "../components/ProductItem";

const Products = () => {
  return (
    <div className="flex gap-3 ">
      {/* category filter, price filter etc */}
      <div></div>
      {/* product cards on clicking a card it should redirect to product detail page */}
      <div className="flex flex-wrap gap-1">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
};

export default Products;
