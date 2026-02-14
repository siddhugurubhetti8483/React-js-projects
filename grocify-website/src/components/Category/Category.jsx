import React from "react";
import Heading from "../Heading/Heading";
import FruitsCat from "../../assets/fruits-and-veggies.png";
import SeaFoodCat from "../../assets/meat-and-seafood.png";
import DairyCat from "../../assets/dairy-and-eggs.png";
import Button from "../Button/Button";

const Category = () => {
  const renderCards = category.map(({ name, description, image }) => {
    return (
      // Card
      <div className="flex-1 basis-[300px]">
        {/* card image */}
        <div className=" w-full min-h-[30vh] relative -mb-10">
          <img src={image} alt={name} className="absolute bottom-0 max-w-full h-auto" />
        </div>

        {/* card content */}
        <div className="bg-zinc-100 pt-16 p-8 rounded-xl shadow-lg">
          <h3 className="text-zinc-800 text-30xl font-bold">{name}</h3>
          <p className=" text-zinc-600 mt-3 mb-9">{description}</p>
          <Button content="Sea All" />
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-8 md:py-10">
        <Heading highlight="Shop" Heading="By Category" />

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:mt-8">
          {renderCards}
        </div>
      </div>
    </section>
  );
};

export default Category;

const category = [
  {
    id: 1,
    name: "Fruits & Vegetables",
    description:
      "Fresh and organic fruits and vegetables for a healthy lifestyle.",
    image: FruitsCat,
  },
  {
    id: 2,
    name: "Meat & Seafood",
    description: "Premium cuts of meat and fresh seafood for delicious meals.",
    image: SeaFoodCat,
  },
  {
    id: 3,
    name: "Dairy & Eggs",
    description:
      "High-quality dairy products and farm-fresh eggs for your daily needs.",
    image: DairyCat,
  },
];
