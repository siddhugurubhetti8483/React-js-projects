import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "../Button/Button";

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="bg-zinc-100 rounded-xl p-4 sm:p-5 shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Card Icons */}
      <div className="flex justify-between items-center mb-3">
        <button
          className="text-2xl sm:text-3xl text-zinc-300 hover:text-red-500 transition-colors duration-300"
          aria-label="Add to wishlist"
        >
          <FaHeart />
        </button>
        <button
          className="bg-gradient-to-b from-orange-400 to-orange-500 text-white text-base sm:text-xl px-3 sm:px-4 py-2 sm:py-3 rounded-lg hover:scale-105 transition-transform duration-300"
          aria-label="Add to cart"
        >
          <FaPlus />
        </button>
      </div>
      {/* Card Img */}
      <div className="w-full h-40 sm:h-48 md:h-52 mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain mx-auto"
        />
      </div>

      {/* Card Content */}
      <div className="text-center">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-zinc-800 mb-2 line-clamp-1">
          {title}
        </h3>
        <p className="text-xl sm:text-2xl font-bold text-orange-500 mt-3 mb-4">
          $ {parseFloat(price).toFixed(2)}
        </p>
        <Button content="Shop Now" />
      </div>
    </div>
  );
};

export default ProductCard;
