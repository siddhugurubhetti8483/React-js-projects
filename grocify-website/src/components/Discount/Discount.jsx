import React from "react";
import Button from "../Button/Button";
import FreshFruits from "../../assets/fresh-fruits.png";

const Discount = () => {
  return (
    <section
      className="bg-zinc-100 bg-none md:bg-no-repeat md:bg-right md:bg-contain"
      style={{ backgroundImage: `url(${FreshFruits})` }}
    >
      <div className="py-8 md:py-20 max-w-[1400px] mx-auto flex lg:flex-row flex-col gap-10 px-6 sm:px-6 md:px-8 lg:px-10">
        <span className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-orange-500 lg:-rotate-90 h-fit lg:self-center">
          20%
        </span>
        <div className="max-w-[700px] md:text-left">
          <h3 className="text-4xl lg:text-7xl md:text-5xl sm:text-4xl text-zinc-800 font-bold">
            First Ordered Discount!
          </h3>
          <p className="text-zinc-600 my-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
            dicta ratione velit quibusdam cumque debitis porro possimus
            asperiores, tempora assumenda.
          </p>
          <Button content="Get a Discount" />
        </div>
      </div>
    </section>
  );
};

export default Discount;
