import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart, FaLeaf, FaShieldAlt, FaSeedling } from "react-icons/fa";
import Basket from "../../assets/basket-full-vegetables.png";

const Values = () => {
  const value = [
    {
      id: 1,
      title: "Trust",
      description:
        "It is a long established fact that a reader will be distracted by the readable.",
      icon: <FaHeart />,
    },
    {
      id: 2,
      title: "Always Fresh",
      description:
        "It is a long established fact that a reader will be distracted by the readable.",
      icon: <FaLeaf />,
    },
    {
      id: 3,
      title: "Food Safety",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      icon: <FaShieldAlt />,
    },
    {
      id: 4,
      title: "100% Organic",
      description:
        "It is a long established fact that a reader will be distracted by the readable.",
      icon: <FaSeedling />,
    },
  ];

  const leftValues = value
    .slice(0, 2)
    .map(({ id, title, description, icon }) => (
      <div
        key={id}
        className="flex flex-col sm:flex-row lg:flex-row-reverse items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left lg:text-right"
      >
        <span className="flex justify-center items-center text-xl sm:text-2xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-12 h-12 sm:w-14 sm:h-14 rounded-full shrink-0">
          {icon}
        </span>
        <div className="flex-1">
          <h3 className="text-zinc-800 text-lg sm:text-xl lg:text-2xl font-bold">
            {title}
          </h3>
          <p className="text-zinc-600 mt-2 text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    ));

  const rightValues = value.slice(2).map(({ id, title, description, icon }) => (
    <div
      key={id}
      className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left"
    >
      <span className="flex justify-center items-center text-xl sm:text-2xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-12 h-12 sm:w-14 sm:h-14 rounded-full shrink-0">
        {icon}
      </span>
      <div className="flex-1">
        <h3 className="text-zinc-800 text-lg sm:text-xl lg:text-2xl font-bold">
          {title}
        </h3>
        <p className="text-zinc-600 mt-2 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  ));

  return (
    <section className="w-full">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 lg:py-16">
        <Heading highlight="Our" heading="Values" />

        {/* Mobile & Tablet: Stack Everything Vertically */}
        <div className="lg:hidden mt-8 sm:mt-10">
          {/* Show all values in a single column on mobile/tablet */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {value.map(({ id, title, description, icon }) => (
              <div
                key={id}
                className="flex flex-row sm:flex-row sm:items-start gap-8 sm:gap-5 sm:text-left"
              >
                <span className="flex justify-center items-center text-xl sm:text-2xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-12 h-12 sm:w-14 sm:h-14 rounded-full shrink-0">
                  {icon}
                </span>
                <div className="flex-1">
                  <h3 className="text-zinc-800 text-lg sm:text-xl font-bold">
                    {title}
                  </h3>
                  <p className="text-zinc-600 mt-2 text-sm sm:text-base leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Show image ONLY on tablet (hidden on mobile) */}
          <div className="hidden mt-8 sm:mt-10">
            <img
              src={Basket}
              alt="Basket of Vegetables"
              className="max-w-[320px] md:max-w-[380px] w-full mx-auto"
            />
          </div>
        </div>

        {/* Desktop: Three Column Layout */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12 mt-12">
          {/* Left Values */}
          <div className="flex flex-col gap-8 xl:gap-18 flex-1">
            {leftValues}
          </div>

          {/* Center Image */}
          <div className="flex justify-center flex-1">
            <img
              src={Basket}
              alt="Basket of Vegetables"
              className="max-w-[300px] xl:max-w-[350px] w-full"
            />
          </div>

          {/* Right Values */}
          <div className="flex-1 gap-8 xl:gap-18 flex flex-col">
            {rightValues}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
