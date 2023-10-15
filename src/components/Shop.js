import React from "react";
import ProductCard from "./ProductCard";
import { Link, useOutletContext } from "react-router-dom";
import SkeletonProductCard from "./SkeletonProductCard";
import Error from "./Error";

export default function Shop() {
  const { products, loading, error } = useOutletContext();

  const renderedProducts = products.map((product, index) => {
    return (
      <Link
        key={product.id}
        to={`${product.id}`}
        state={{ product }}
        style={{ "--item-number": index }}
      >
        <ProductCard
          image={product.image}
          rating={product.rating}
          title={product.title}
          price={product.price}
        />
      </Link>
    );
  });

  if (!error) {
    return <Error message="Failed to load products. Please try again later." />;
  }

  return (
    <div className="shop">
      <h2 className="shop-title">Get Clothing!</h2>
      <p className="shop-description">
        Times are tough. Liven up with our top-notch clothing!
      </p>
      <div className="products">
        {/* Show error when there's an error */}
        {!loading && renderedProducts}
        {loading && (
          <>
            <SkeletonProductCard />
            <SkeletonProductCard />
            <SkeletonProductCard />
            <SkeletonProductCard />
            <SkeletonProductCard />
            <SkeletonProductCard />
            <SkeletonProductCard />
            <SkeletonProductCard />
            <SkeletonProductCard />
            <SkeletonProductCard />
            <SkeletonProductCard />
            <SkeletonProductCard />
          </>
        )}
      </div>
    </div>
  );
}
