// import React from "react";
// import Grocery from "../../assets/grocery.png";
// import Button from "../Button/Button";

// const Hero = () => {
//   return (
//     <section className="pt-[14vh]">
//       <div className="min-h-screen max-w-[1400px] mx-auto px-5 md:px-10 flex flex-col-reverse md:flex-row items-center gap-10">
//         {/* Content */}
//         <div className="flex-1 text-center md:text-left">
//           <span className="inline-block bg-orange-100 text-orange-500 text-sm md:text-lg px-4 py-2 rounded-full">
//             Export Best Quality...
//           </span>

//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-4 leading-tight">
//             Tasty Organic <span className="text-orange-500">Fruits</span> &{" "}
//             <span className="text-orange-500">Veggies</span>
//             <br className="hidden md:block" />
//             In Your City
//           </h1>

//           <p className="text-zinc-600 text-base md:text-lg max-w-[530px] mt-5 mb-10 mx-auto md:mx-0">
//             Bred for a high content of beneficial substances. Our products are
//             all fresh and healthy.
//           </p>

//           <Button content="Shop Now" />
//         </div>

//         {/* Image */}
//         <div className="flex-1 flex justify-center">
//           <img
//             src={Grocery}
//             alt="Hero"
//             className="w-[75%] sm:w-[65%] md:w-full max-w-[500px]"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import Grocery from "../../assets/grocery.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section className="pt-16 md:pt-22">
      <div className="min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] max-w-[1400px] mx-auto px-5 md:px-10 flex flex-col-reverse md:flex-row items-center gap-10 md:justify-center">
        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block bg-orange-100 text-orange-500 text-sm md:text-lg px-4 py-2 rounded-full">
            Export Best Quality...
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-4 leading-tight">
            Tasty Organic <span className="text-orange-500">Fruits</span> &{" "}
            <span className="text-orange-500">Veggies</span>
            <br className="hidden md:block" />
            In Your City
          </h1>

          <p className="text-zinc-600 text-base md:text-lg max-w-[530px] mt-5 mb-8 mx-auto md:mx-0">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>

          <Button content="Shop Now" />
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={Grocery}
            alt="Hero"
            className="w-[75%] sm:w-[65%] md:w-full max-w-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
