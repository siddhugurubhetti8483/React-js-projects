import React, { useState } from "react";
import Heading from "../Heading/Heading";
import ProductList from "../ProductList/ProductList";
import ProductCard from "../ProductCard/ProductCard";
import Button from "../Button/Button";

const Products = () => {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "Seafood"];
  const [activeTab, setActiveTab] = useState("All");

  const width = useWindowWidth();

  // columns based on Tailwind breakpoints
  const columns = width < 640 ? 1 : width < 1024 ? 2 : width < 1280 ? 3 : 4;

  const maxItems = columns * 2; // 2 rows fixed

  // Filter products based on active tab
  const filteredItems =
    activeTab === "All"
      ? ProductList
      : ProductList.filter((product) => product.category === activeTab);

  const renderCards = filteredItems.slice(0, maxItems).map((product) => {
    return (
      <ProductCard
        key={product.id}
        image={product.image}
        title={product.title}
        price={product.price}
      />
    );
  });

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20">
        <Heading highlight="Our" heading="Products" />

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mt-8 sm:mt-10">
          {categories.map((category) => {
            return (
              <button
                key={category}
                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 text-sm sm:text-base md:text-lg font-medium rounded-full cursor-pointer transition-all duration-300 ${activeTab === category ? "bg-gradient-to-b from-orange-400 to-orange-500 text-white shadow-md scale-105" : "bg-zinc-100 text-zinc-700  hover:bg-zinc-200 "} `}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Products Grid - Fully Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-9 mt-10 sm:mt-12 md:mt-16 lg:mt-20">
          {renderCards}
        </div>

        <div className="mt-10 sm:mt-12 md:mt-16 flex justify-center">
          <Button content="View All" />
        </div>
      </div>
    </section>
  );
};

export default Products;

const useWindowWidth = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};
